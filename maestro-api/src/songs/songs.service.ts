import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/user.entity";
import * as bcrypt from "bcrypt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Song } from "./song.entity";
import { CreateSongDto } from "./input/create-song.dto";
import { LikeSongDto } from "./input/like-song.dto";
import { Like } from "src/likes/like.entity";
import { getConnection } from "typeorm";
@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private readonly songsRepository: Repository<Song>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(Like)
    private readonly likesRepository: Repository<Like>
  ) {}

  public async createSong(input: CreateSongDto, user: User): Promise<Song> {
    return await this.songsRepository.save({
      ...input,
      creator: user,
    });
  }

  public async likeASong(input: LikeSongDto, user: User) {
    const findSong = await this.songsRepository.findOne({
      where: { id: input.songId },
    });

    if (!findSong) {
      throw new BadRequestException([`Cant find song`]);
    }

    const ifAlreadyLiked = await this.likesRepository.findOne({
      where: {
        user: {
          id: user.id
        },
        song:  {
          id: input.songId
        }
      },
    });

    if (ifAlreadyLiked) {
      await this.likesRepository.delete({id: ifAlreadyLiked.id});
      return {
        status: "unliked",
        totalLikes: (await this.likesRepository.findBy({ song: findSong })).length,
      };
    } else {
      return {
        status: "liked",
        like: await this.likesRepository.save({
          song: findSong,
          user,
          date: new Date(),
        }),
        totalLikes: (await this.likesRepository.findBy({ song: findSong })).length,
      };
    }
  }
}

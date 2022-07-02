import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/user.entity";
import * as bcrypt from "bcrypt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Song } from "./song.entity";
import { CreateSongDto } from "./input/create-song.dto";

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private readonly songsRepository: Repository<Song>
  ) {}

  public async createSong(input: CreateSongDto, user: User): Promise<Song> {
    return await this.songsRepository.save({
      ...input,
      creator: user,
    });
  }
}

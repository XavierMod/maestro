import {
  BadRequestException,
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Logger,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthGuardJwt } from "src/auth/auth.guard.jwt";
import { CurrentUser } from "src/auth/current-user.decorator";
import { User } from "src/users/user.entity";
import { Repository } from "typeorm";
import { CreateSongPartDto } from "./input/create-song-part.dto";
import { CreateSongDto } from "./input/create-song.dto";
import { LikeSongDto } from "./input/like-song.dto";
import { Song } from "./song.entity";
import { SongPart } from "./songPart.entity";
import { SongsService } from "./songs.service";
import { v4 as uuidv4 } from "uuid";
import { DeleteSongPart } from "./input/delete-song-part.dto";

@Controller("/songs")
export class SongsController {
  private readonly logger = new Logger(SongsController.name);

  constructor(
    @InjectRepository(Song)
    private readonly repository: Repository<Song>,
    @InjectRepository(SongPart)
    private readonly songPartsRepository: Repository<SongPart>,
    private readonly songsService: SongsService
  ) {}

  @Get()
  async findAll() {
    // * Using the added logger
    this.logger.log("Hit the findAll route");
    const events = await this.repository.find();
    this.logger.debug(`Found ${events.length} events`);
    return events;
  }

  @Post()
  @UseGuards(AuthGuardJwt)
  async create(@Body() input: CreateSongDto, @CurrentUser() user: User) {
    const findSongWithSameName = await this.repository.findOne({
      where: { name: input.name },
    });

    if (findSongWithSameName) {
      throw new BadRequestException([
        `User has already a song with name ${input.name}`,
      ]);
    }
    return await this.songsService.createSong(input, user);
  }

  @Post("part")
  @UseGuards(AuthGuardJwt)
  async createSongPart(
    @Body() input: CreateSongPartDto,
    @CurrentUser() user: User
  ) {
    const findSong = await this.repository.findOne({
      where: { id: input.songId },
    });

    if (!findSong) {
      throw new BadRequestException([
        `Can't add song part to a song that doesn't exist`,
      ]);
    }

    if (findSong.creator.username !== user.username) {
      throw new ForbiddenException([
        `The song creator and user request are different`,
      ]);
    }
    // Creates a song part
    const createSongPart = await this.songPartsRepository.save({
      id: uuidv4(),
      name: input.name,
      desc: input.desc,
      song: findSong,
    });

    const findPatrr = await this.songPartsRepository.findOne({
      where: { id: createSongPart.id },
    });

    // Adds song part to song
    findSong.songParts.push(findPatrr);

    return createSongPart;
  }

  @Delete("part")
  @UseGuards(AuthGuardJwt)
  async deleteSongPart(@Body() input: DeleteSongPart) {
    const findPatrr = await this.songPartsRepository.findOne({
      where: { id: input.id },
    });
    return await this.songPartsRepository.delete(findPatrr);
  }

  @Patch("like")
  @UseGuards(AuthGuardJwt)
  async likeASong(@Body() input: LikeSongDto, @CurrentUser() user: User) {
    return await this.songsService.likeASong(input, user);
  }
}

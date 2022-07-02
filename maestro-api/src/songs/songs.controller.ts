import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Logger,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthGuardJwt } from "src/auth/auth.guard.jwt";
import { CurrentUser } from "src/auth/current-user.decorator";
import { User } from "src/users/user.entity";
import { Repository } from "typeorm";
import { CreateSongDto } from "./input/create-song.dto";
import { LikeSongDto } from "./input/like-song.dto";
import { Song } from "./song.entity";
import { SongsService } from "./songs.service";

@Controller("/songs")
export class SongsController {
  private readonly logger = new Logger(SongsController.name);

  constructor(
    @InjectRepository(Song)
    private readonly repository: Repository<Song>,
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

  @Patch("like")
  @UseGuards(AuthGuardJwt)
  async likeASong(@Body() input: LikeSongDto, @CurrentUser() user: User) {
    return await this.songsService.likeASong(input, user);
  }
}

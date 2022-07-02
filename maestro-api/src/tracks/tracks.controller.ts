import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Patch,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthGuardJwt } from "src/auth/auth.guard.jwt";
import { CurrentUser } from "src/auth/current-user.decorator";
import { Song } from "src/songs/song.entity";
import { User } from "src/users/user.entity";
import { Repository } from "typeorm";
import { CreateTrackDto } from "./input/create-track.dto";
import { LinkTrackToSong } from "./input/link-track-to-song.dto";
import { Track } from "./track.entity";
import { TracksService } from "./tracks.service";

@Controller("tracks")
export class TracksController {
  constructor(
    @InjectRepository(Track)
    private readonly tracksRepository: Repository<Track>,
    @InjectRepository(Song)
    private readonly songsRepository: Repository<Song>,
    private readonly tracksService: TracksService
  ) {}

  @Get()
  async findAll() {
    const tracks = await this.tracksRepository.find();
    return tracks;
  }

  @Post("upload")
  @UseInterceptors(FilesInterceptor("files"))
  @UseGuards(AuthGuardJwt)
  async create(@UploadedFiles() files: Array<Express.Multer.File>, @Body() input: CreateTrackDto, @CurrentUser() user: User) {
    return await this.tracksService.createTrack(input, user, files);
  }

  // @Patch('link')
  // @UseGuards(AuthGuardJwt)
  // async linkTrackToSong(@Body() input: LinkTrackToSong) {
  //   const findTrack = await this.tracksRepository.findOne({
  //     where: { id: input.trackId },
  //   });
  //   const findSong = await this.songsRepository.findOne({
  //     where: { id: input.songId },
  //   });

  //   if (!findTrack || !findSong) {
  //     throw new BadRequestException([`Cant find either song or track`]);
  //   }

  //   findTrack.song = findSong;

  //   return findTrack;
  // }
}

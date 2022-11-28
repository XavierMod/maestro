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
import { SongPart } from "src/songs/songPart.entity";
import { User } from "src/users/user.entity";
import { Repository } from "typeorm";
import { ModifyTrackRequest } from "./input/modify-track-request.dto";
import { CreateTrackRequestDto } from "./input/create-track-request.dto";
import { CreateTrackDto } from "./input/create-track.dto";
import { Track } from "./track.entity";
import { TrackRequest } from "./trackRequest.entity";
import { TracksService } from "./tracks.service";

@Controller("tracks")
export class TracksController {
  constructor(
    @InjectRepository(Track)
    private readonly tracksRepository: Repository<Track>,
    @InjectRepository(TrackRequest)
    private readonly trackRequestsRepository: Repository<TrackRequest>,
    @InjectRepository(Song)
    private readonly songsRepository: Repository<Song>,
    @InjectRepository(SongPart)
    private readonly songPartRepository: Repository<SongPart>,
    private readonly tracksService: TracksService
  ) {}

  @Get("")
  async findAll() {
    const tracks = await this.tracksRepository.find();
    return tracks;
  }

  @Get("requests")
  async findAllTrackRequests() {
    const tracks = await this.trackRequestsRepository.find();
    return tracks;
  }

  @Post("upload")
  @UseInterceptors(FilesInterceptor("files"))
  @UseGuards(AuthGuardJwt)
  async create(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() input: CreateTrackDto,
    @CurrentUser() user: User
  ) {
    return await this.tracksService.createTrack(input, user, files);
  }

  @Patch("link")
  @UseGuards(AuthGuardJwt)
  async createTrackRequest(@Body() input: CreateTrackRequestDto) {
    const findTrack = await this.tracksRepository.findOne({
      where: { id: input.trackId },
    });

    const findSong = await this.songsRepository.findOne({
      where: { id: input.songId },
    });

    const songPart = await this.songPartRepository.findOne({
      where: { id: input.songPartId },
    });

    if (!findSong || !findTrack || !songPart) {
      throw new BadRequestException([`Can't find track, song or song part`]);
    }

    if (!findSong.songParts.find((el) => el.id === input.songPartId)) {
      throw new BadRequestException([`Song part doesn't exist in song`]);
    }

    try {
      // Creates a song part
      const createTrackRequest = await this.trackRequestsRepository.save({
        song: findSong,
        track: findTrack,
        added: new Date(),
        isChosen: false,
        hasBeenListened: false,
        isDiscarded: false,
        songPart: songPart,
      });
      const trackRequest = await this.trackRequestsRepository.findOne({
        where: { id: createTrackRequest.id },
      });

      findSong.trackRequests.push(trackRequest);

      findTrack.trackRequest = trackRequest;

      return findSong;
    } catch (e) {
      throw new BadRequestException([`Request already exists`]);
    }
  }

  @Patch("request")
  @UseGuards(AuthGuardJwt)
  async modifyTrackRequest(@Body() input: ModifyTrackRequest) {
    const findTrackRequest = await this.trackRequestsRepository.findOne({
      where: { id: input.trackRequestId },
    });

    if (!findTrackRequest) {
      throw new BadRequestException([`Track request doesn't exist`]);
    }

    if (input.isChosen) {
      const findSong = await this.songsRepository.findOne({
        where: { id: findTrackRequest.songId },
      });

      // If there is already a chosen track request for the selected part - throw
      const trackRequestsWithSongPartId = findSong.trackRequests.filter((trackRequest) => trackRequest.songPart.id === findTrackRequest.songPart.id);
      if (trackRequestsWithSongPartId.find((trackRequest) => trackRequest.isChosen)) {
        throw new BadRequestException([`There is already a chosen track for this song part`]);
      }

      findTrackRequest.isChosen = input.isChosen;
    }

    if (input.hasBeenListened) {
      findTrackRequest.hasBeenListened = input.hasBeenListened;
    }

    if (input.isDiscarded) {
      findTrackRequest.hasBeenListened = input.isDiscarded;
    }

    return findTrackRequest;
  }
}

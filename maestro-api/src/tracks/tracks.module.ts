import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Song } from "src/songs/song.entity";
import { SongPart } from "src/songs/songPart.entity";
import { Track } from "./track.entity";
import { TrackRequest } from "./trackRequest.entity";
import { TracksController } from "./tracks.controller";
import { TracksService } from "./tracks.service";

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: "./uploads/tracks",
      }),
    }),
    TypeOrmModule.forFeature([Track, Song, SongPart, TrackRequest]),
  ],
  controllers: [TracksController],
  providers: [TracksService],
})
export class TracksModule {}

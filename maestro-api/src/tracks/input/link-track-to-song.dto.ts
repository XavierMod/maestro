import {
  IsDateString,
  IsNotEmpty,
  isNotEmpty,
  IsOptional,
  isString,
  IsString,
  Length,
} from "class-validator";
import { Song } from "src/songs/song.entity";
import { User } from "src/users/user.entity";
import { Track } from "../track.entity";

/** A data transfer object (DTO) is an object that carries data between processes. It's a technique to facilitate communication between two systems (like an API -> server) without potentially exposing sensitive information */
export class LinkTrackToSong {
  @IsNotEmpty()
  trackId: number;

  @IsNotEmpty()
  songId: number;
}

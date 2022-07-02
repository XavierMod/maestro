import { IsDate, IsDateString, IsNotEmpty, isNotEmpty, isString, IsString, Length } from "class-validator";

/** A data transfer object (DTO) is an object that carries data between processes. It's a technique to facilitate communication between two systems (like an API -> server) without potentially exposing sensitive information */
export class LikeSongDto {
  @IsNotEmpty()
  songId: number;
}

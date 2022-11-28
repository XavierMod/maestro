import { IsBoolean, IsDateString, IsNotEmpty, isNotEmpty, IsOptional, isString, IsString, Length } from "class-validator";
import { User } from "src/users/user.entity";

/** A data transfer object (DTO) is an object that carries data between processes. It's a technique to facilitate communication between two systems (like an API -> server) without potentially exposing sensitive information */
export class ModifyTrackRequest {
  @IsNotEmpty()
  trackRequestId: number;

  @IsOptional()
  isChosen: boolean;

  @IsOptional()
  hasBeenListened: boolean;

  @IsOptional()
  isDiscarded: boolean;
}

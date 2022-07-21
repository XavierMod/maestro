import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Length,
} from "class-validator";

export class CreateUserDto {
  @Length(5)
  @IsNotEmpty()
  readonly username: string;

  @Length(5)
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @Length(5)
  @IsNotEmpty()
  readonly password: string;
}

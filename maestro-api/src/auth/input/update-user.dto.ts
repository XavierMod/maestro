import {
    IsArray,
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    Length,
  } from "class-validator";
  
  export class UpdateUserDto {
    @Length(10)
    @IsNumber()
    @IsOptional()
    readonly age: number;
  
    @IsArray()
    @IsOptional()
    readonly roles: string;
  
    @IsArray()
    @IsOptional()
    readonly genres: string;
  
    @Length(10)
    @IsOptional()
    readonly bio: string;
  
    @IsArray()
    @IsOptional()
    readonly links: string;

    @IsOptional()
    readonly image: string;
  }
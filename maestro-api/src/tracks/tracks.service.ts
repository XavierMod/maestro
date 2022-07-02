import { Injectable } from "@nestjs/common";
import { User } from "src/users/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Track } from "./track.entity";
import { CreateTrackDto } from "./input/create-track.dto";

@Injectable()
export class TracksService {
  constructor(
    @InjectRepository(Track)
    private readonly tracksRepository: Repository<Track>
  ) {}

  public async createTrack(input: CreateTrackDto, user: User): Promise<Track> {
    return await this.tracksRepository.save({
      ...input,
      creator: user,
    });
  }
}
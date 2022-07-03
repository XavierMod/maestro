import { Body, Injectable, UploadedFiles } from "@nestjs/common";
import { User } from "src/users/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Track } from "./track.entity";
import { CreateTrackDto } from "./input/create-track.dto";
import { CurrentUser } from "src/auth/current-user.decorator";
import getAudioDurationInSeconds from "get-audio-duration";

@Injectable()
export class TracksService {
  constructor(
    @InjectRepository(Track)
    private readonly tracksRepository: Repository<Track>
  ) {}

  public async createTrack(
    input: CreateTrackDto,
    user: User,
    @UploadedFiles() files: Array<Express.Multer.File>
  ): Promise<Track> {

    const duration = await getAudioDurationInSeconds(files[0].path);

    return await this.tracksRepository.save({
      ...input,
      uploadId: files[0].filename,
      creator: user,
      duration,
    });
  }
}

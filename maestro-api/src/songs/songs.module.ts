import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Like } from 'src/likes/like.entity';
import { User } from 'src/users/user.entity';
import { Song } from './song.entity';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';

@Module({
  // Makes a repository for the Event entity
  // * Needs to be do it every time
  // The TypeOrmModule will only be available on the EventsController
  imports: [TypeOrmModule.forFeature([Song, Like, User])],
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {}

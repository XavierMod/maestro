import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './song.entity';
import { SongsController } from './songs.controller';

@Module({
  // Makes a repository for the Event entity
  // * Needs to be do it every time
  // The TypeOrmModule will only be available on the EventsController
  imports: [TypeOrmModule.forFeature([Song])],
  controllers: [SongsController],
})
export class SongsModule {}

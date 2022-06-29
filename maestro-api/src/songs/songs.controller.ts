import { Controller, Get, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from './song.entity';

@Controller('/songs')
export class SongsController {
    private readonly logger = new Logger(SongsController.name);

    constructor(
        @InjectRepository(Song)
        private readonly repository: Repository<Song>,
      ) {}

      @Get()
      async findAll() {
        // * Using the added logger
        this.logger.log('Hit the findAll route');
        const events = await this.repository.find();
        this.logger.debug(`Found ${events.length} events`);
        return events;
      }
}

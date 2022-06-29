import { Controller, Get, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    private readonly logger = new Logger(UsersController.name);

    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>,
      ) {}

      @Get()
      async findAll() {
        // * Using the added logger
        this.logger.log('Hit the findAll route');
        const users = await this.repository.find();
        this.logger.debug(`Found ${users.length} users`);
        return users;
      }
}

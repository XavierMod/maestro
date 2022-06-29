import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Attendee } from 'src/events/attendee.entity';
import { Event } from 'src/events/event.entity';
import { Subject } from 'src/school/subject.entity';
import { Teacher } from 'src/school/teacher.entity';
import { Song } from 'src/songs/song.entity';
import { User } from 'src/users/user.entity';

export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // Contains all entities from the project
    entities: [Event, Attendee, Subject, Teacher, Song, User],
    // Synchronize automatically updates the DB schema when changing entities.
    // ! Should not be true in prod
    synchronize: true,
  }),
);

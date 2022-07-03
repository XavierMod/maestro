import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Attendee } from 'src/events/attendee.entity';
import { Event } from 'src/events/event.entity';
import { Like } from 'src/likes/like.entity';
import { Song } from 'src/songs/song.entity';
import { SongPart } from 'src/songs/songPart.entity';
import { Track } from 'src/tracks/track.entity';
import { TrackRequest } from 'src/tracks/trackRequest.entity';
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
    entities: [Event, Attendee, Song, SongPart, User, Track, Like, TrackRequest],
    // Synchronize automatically updates the DB schema when changing entities.
    // ! Should not be true in prod
    synchronize: true,
  }),
);

import { Like } from 'src/likes/like.entity';
import { TrackRequest } from 'src/tracks/trackRequest.entity';
import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SongPart } from './songPart.entity';

@Entity('song')
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100 })
  name: string;

  @Column()
  description: string;

    // * Defining relationships
  // * This relationship is mandatory - it won't work otherwise
  @ManyToOne(() => User, (user) => user.songs, {
    // This entity won't be able to exist without an Event id
    nullable: false,
    eager: true
  })
  creator: User;
  
  @OneToMany(() => Like, (likes) => likes.song, {
    eager: false
  })
  likes: Like[];

  @OneToMany(() => SongPart, (part) => part.song, {
    eager: true,
    cascade: true
  })
  songParts: SongPart[];

  @OneToMany(() => TrackRequest, (req) => req.song, {
    eager: true,
    cascade: true
  })
  trackRequests: TrackRequest[];
}

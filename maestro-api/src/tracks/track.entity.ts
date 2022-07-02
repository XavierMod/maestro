import { Optional } from '@nestjs/common';
import { Song } from 'src/songs/song.entity';
import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('track')
export class Track {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100 })
  name: string;

  @ManyToOne(() => User, (user) => user.tracks, {
    // This entity won't be able to exist without an Event id
    nullable: false,
  })
  creator: User;

  @Optional()
  @OneToOne(() => Song)
  song: Song;
}

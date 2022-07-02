import { IsEmail } from "class-validator";
import { Song } from "src/songs/song.entity";
import { Track } from "src/tracks/track.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column({ default: "" })
  bio: string;

  @Column({ default: "" })
  image: string;

  @Column()
  password: string;

  // * Defining relationships
  // When using a OneToMany decorator, ManyToOne is mandatory on the other end
  @OneToMany(() => Song, (song) => song.creator, {
    eager: false,
    cascade: true,
  })
  songs: Song[];

  @OneToMany(() => Track, (track) => track.creator, {
    // eager: false,
    cascade: true,
  })
  tracks: Track[];
}

import { IsEmail } from "class-validator";
import { Like } from "src/likes/like.entity";
import { Song } from "src/songs/song.entity";
import { Track } from "src/tracks/track.entity";
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({default: false})
  hasCompletedRegistration: boolean;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column({ default: "" })
  bio: string;

  @Column({ nullable: true })
  age: number;

  @Column({ default: "", nullable: true })
  image: string;

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

  @OneToMany(() => Like, (like) => like.user, { eager: true })
  likes: Like[];

  @Column({type: "simple-array", nullable: true})
  roles: string;

  @Column({type: "simple-array", nullable: true})
  links: string;

  @Column({type: "simple-array", nullable: true})
  genres: string;
}

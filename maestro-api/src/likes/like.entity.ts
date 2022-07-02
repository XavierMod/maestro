import { Optional } from "@nestjs/common";
import { Song } from "src/songs/song.entity";
import { User } from "src/users/user.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("like")
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;
  
  @ManyToOne(() => Song, (song) => song.likes, {})
  song: Song;

  @ManyToOne(() => User, (user) => user.likes, { eager: true })
  user: User;
}

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
  
  @ManyToOne(() => Song, (song) => song.likes)
  @JoinColumn({name: "songId"})
  song: Song;

  @Column()
  songId: number;

  @ManyToOne(() => User, (user) => user.likes)
  @JoinColumn({ name: "userId" })
  user: User;

  @Column()
  userId: number;
}

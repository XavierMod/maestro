import { Optional } from "@nestjs/common";
import { Song } from "src/songs/song.entity";
import { User } from "src/users/user.entity";
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("track")
export class Track {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 100 })
  name: string;

  @ManyToOne(() => User, (user) => user.tracks, {
    nullable: false,
    eager: true
  })
  creator: User;

  // @Optional()
  // @OneToOne(() => Song, { eager: true })
  // song: Song;

  @Column()
  @Optional()
  uploadId: string;
}

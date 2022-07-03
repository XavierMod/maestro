import { Optional } from "@nestjs/common";
import { Song } from "src/songs/song.entity";
import { User } from "src/users/user.entity";
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TrackRequest } from "./trackRequest.entity";

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

  // * Next to do: link songs and tracks

  // @Optional()
  @OneToOne(() => TrackRequest)
  @JoinColumn()
  trackRequest: TrackRequest;

  @Column()
  @Optional()
  uploadId: string;
}

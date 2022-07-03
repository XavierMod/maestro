import { Optional } from "@nestjs/common";
import { Song } from "src/songs/song.entity";
import { SongPart } from "src/songs/songPart.entity";
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
import { Track } from "./track.entity";

@Entity("trackRequest")
export class TrackRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Song, (song) => song.trackRequests, {
    // This entity won't be able to exist without an Event id
    nullable: false,
  })
  @JoinColumn({ name: "songId" })
  song: Song;

  @Column({ nullable: false })
  songId: number;

  @OneToOne(() => Track, (track) => track.trackRequest, { eager: true })
  @JoinColumn()
  track: Track;

  @OneToOne(() => SongPart, { eager: true, cascade: true, onDelete: "CASCADE" })
  @JoinColumn()
  songPart: SongPart;

  @Column()
  added: Date;

  @Column()
  isChosen: boolean;

  @Column()
  hasBeenListened: boolean;

  @Column()
  isDiscarded: boolean;
}

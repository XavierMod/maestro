  import { Optional } from "@nestjs/common";
  import { Song } from "src/songs/song.entity";
  import { User } from "src/users/user.entity";
  import {
    Column,
    Entity,
    JoinTable,
    ManyToOne,
    OneToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
  @Entity("songPart")
  export class SongPart {
    @PrimaryColumn()
    id: string;
  
    @Column()
    name: string;
      
    @Column()
    desc: string;
  
    @ManyToOne(() => Song, (song) => song.songParts, {
      nullable: false,
    })
    song: Song;
  }
  
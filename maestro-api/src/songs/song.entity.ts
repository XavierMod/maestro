import { Like } from 'src/likes/like.entity';
import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
  })
  creator: User;
  
  @OneToMany(() => Like, (likes) => likes.song, {
    eager: false
  })
  likes: Like[];
}

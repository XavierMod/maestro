import { IsEmail } from 'class-validator';
import { Song } from 'src/songs/song.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  @IsEmail()
  email: string;

  @Column({default: ''})
  bio: string;

  @Column({default: ''})
  image: string;

  @Column()
  password: string;

    // * Defining relationships
  // When using a OneToMany decorator, ManyToOne is mandatory on the other end
  @OneToMany(() => Song, (song) => song.creator, {
    // Set this relation to be eager. Eager relations are always loaded automatically when relation's owner entity is loaded using find* methods. Only using QueryBuilder prevents loading eager relations. Eager flag cannot be set from both sides of relation - you can eager load only one side of the relationship.
    eager: true,
    // eager set to true will render the attendees key
    // * Sets cascades options for the given relation. If set to true then it means that related object can be allowed to be inserted or updated in the database.
    // Cascading will update/delete/etc all the references in other tables -> will modify the event key on other attendees.
    cascade: true,
  })
  songs: Song[];
}

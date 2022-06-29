import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Teacher } from './teacher.entity';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Teacher, (teacher) => teacher.subjects, { cascade: true })
  // the @JoinTable decorator goes on only one entity
  // * It creates a new table
  @JoinTable()
  teachers: Teacher[];
}

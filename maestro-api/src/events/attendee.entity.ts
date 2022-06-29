import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Event } from './event.entity';

@Entity()
export class Attendee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // * Defining relationships
  // * This relationship is mandatory - it won't work otherwise
  @ManyToOne(() => Event, (event) => event.attendees, {
    // This entity won't be able to exist without an Event id
    nullable: false,
  })
  // This decorator changes the name of the column: from eventId to event_id
  //   @JoinColumn({
  //     name: 'event_id',
  //   })
  event: Event;
}

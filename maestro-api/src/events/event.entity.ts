/**
 * An entity is a lightweight persistence domain object. Typically, an entity represents a table in a relational database, and each entity instance corresponds to a row in that table. The primary programming artifact of an entity is the entity class, although entities can use helper classes.
 */

// * Entities are tables in the DB

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Attendee } from './attendee.entity';

// All entities must have a defined decorator
@Entity('event')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  // All entity properties must have a column decorator

  @Column('varchar', { length: 100 })
  name: string;

  @Column()
  description: string;

  // the name prop changes the column name
  @Column({ name: 'when_date' })
  when: Date;

  @Column()
  address: string;

  // * Defining relationships
  // When using a OneToMany decorator, ManyToOne is mandatory on the other end
  @OneToMany(() => Attendee, (attendee) => attendee.event, {
    // Set this relation to be eager. Eager relations are always loaded automatically when relation's owner entity is loaded using find* methods. Only using QueryBuilder prevents loading eager relations. Eager flag cannot be set from both sides of relation - you can eager load only one side of the relationship.
    eager: true,
    // eager set to true will render the attendees key
    // * Sets cascades options for the given relation. If set to true then it means that related object can be allowed to be inserted or updated in the database.
    // Cascading will update/delete/etc all the references in other tables -> will modify the event key on other attendees.
    cascade: true,
  })
  attendees: Attendee[];
}

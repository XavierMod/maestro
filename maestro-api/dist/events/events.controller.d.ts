import { CreateEventDto } from './create-event.dto';
import { Event } from './event.entity';
import { UpdateEventDto } from './update-event.dto';
import { Repository } from 'typeorm';
import { Attendee } from './attendee.entity';
export declare class EventsController {
    private readonly repository;
    private readonly attendeeRepository;
    private readonly logger;
    constructor(repository: Repository<Event>, attendeeRepository: Repository<Attendee>);
    findAll(): Promise<Event[]>;
    practice(): Promise<Event[]>;
    practice2(): Promise<Event>;
    practice3(): Promise<void>;
    findOne(id: any): Promise<Event>;
    create(input: CreateEventDto): Promise<{
        when: Date;
        name: string;
        description: string;
        address: string;
    } & Event>;
    update(id: any, input: UpdateEventDto): Promise<{
        when: Date;
        name: string;
        description: string;
        address: string;
        id: number;
        attendees: Attendee[];
    } & Event>;
    remove(id: any, input: any): Promise<void>;
}

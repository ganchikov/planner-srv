import {Document} from 'mongoose';
import {Person} from './person.interface';

export interface Team extends Document {
    readonly name: string;
    readonly members: Person[];
}
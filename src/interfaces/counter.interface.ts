import {Document} from 'mongoose';
import {Person} from './person.interface';

export interface Counter extends Document {
    readonly _id: string;
    readonly sequence_val: number;
}
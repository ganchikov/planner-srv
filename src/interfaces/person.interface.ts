import {Document} from 'mongoose';
import {Absence} from './absence.interface';

export interface Person extends Document {
    readonly name: string;
    readonly start_date: Date;
    readonly end_date: Date;
    readonly absences: Absence[];
}
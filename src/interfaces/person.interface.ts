import {Document} from 'mongoose';
import {Absence} from './absence.interface';

export interface Person extends Document {
    readonly name: string;
    readonly absences: Absence[];
}
import {Document} from 'mongoose';

export interface Absence extends Document {
    readonly text: string;
    readonly type: string;
    readonly confirmed: boolean;
    readonly start_date: Date;
    readonly end_date: Date;
}
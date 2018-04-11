import {Document} from 'mongoose';

export interface Dummy extends Document {
    readonly name: string;
}
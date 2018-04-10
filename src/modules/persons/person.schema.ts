import * as mongoose from 'mongoose';
import {Collections} from 'constants/mongo';

export const PersonSchema = new mongoose.Schema({
    id: {type: Number, index: true, unique: true},
    name: String,
    start_date: Date,
    end_date: Date,
    absences: [{type: mongoose.Schema.Types.ObjectId, ref: Collections.absences}],
}, {id: false, autoIndex: true});
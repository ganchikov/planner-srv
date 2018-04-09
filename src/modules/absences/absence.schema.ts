import * as mongoose from 'mongoose';

export const AbsenceSchema = new mongoose.Schema({
    id: {type: Number, index: true, unique: true},
    name: String,
    start_date: Date,
    end_date: Date,
    confirmed: Boolean,
    absence_type: String,
}, {id: false, autoIndex: true});
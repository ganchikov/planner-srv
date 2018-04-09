import * as mongoose from 'mongoose';

export const CounterSchema = new mongoose.Schema({
    _id: String,
    sequence_val: {type: Number, default: 1},
}, {id: false, autoIndex: true});
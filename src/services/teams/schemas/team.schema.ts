import * as mongoose from 'mongoose';

export const TeamSchema = new mongoose.Schema({
    id: Number,
    name: String,
    members: [{type: mongoose.Schema.Types.ObjectId, ref: 'person'}],
}, {id: false, autoIndex: true});
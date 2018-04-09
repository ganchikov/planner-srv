import * as mongoose from 'mongoose';
import {Collections} from 'constants/mongo';

export const TeamSchema = new mongoose.Schema({
    id:  {type: Number, index: true, unique: true},
    name: String,
    members: [{type: mongoose.Schema.Types.ObjectId, ref: Collections.people}],
}, {id: false, autoIndex: true});
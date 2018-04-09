import * as mongoose from 'mongoose';
import * as MongoCollections from 'constants/mongo/collections';


export const PersonSchema = new mongoose.Schema({
    id: {type: Number, index: true, unique: true},
    name: String,
    start_date: Date,
    end_date: Date,
    absences: [{type: mongoose.Schema.Types.ObjectId, ref: MongoCollections.absences}],
}, {id: false, autoIndex: true});
import * as mongoose from 'mongoose';
import {Collections} from 'constants/mongo';

export const DummySchema = new mongoose.Schema({
    name: String,
});
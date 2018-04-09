import {Model, Types} from 'mongoose';
import {Component} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {CounterSchema} from './counter.schema';
import {Counter} from 'interfaces/counter.interface';

@Component()
export class CounterService {

    constructor(@InjectModel(CounterSchema) private readonly counterModel: Model<Counter>){

    }

    async getCounterIncrement(_id: string): Promise<Counter> {
        let counter = await this.counterModel.findByIdAndUpdate({_id}, {$inc: {sequence_val: 1}}, {new: true});
        if (!counter) {
            counter = await this.counterModel.create({_id});
        }
        return counter;
    }
}
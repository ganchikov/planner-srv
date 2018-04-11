import {Model, Types} from 'mongoose';
import {Component, UseInterceptors, Inject} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Dummy} from './dummy.interface';
import {DummySchema} from './dummy.schema';

@Component()
export class DummyService {

    constructor(@Inject('DummyModelToken') private readonly dummyModel: Model<Dummy>){

    }

    dummyMethod(param?: string): string {
        return param ? param : 'result';
    }

    // async findAll(filter?) {
    //     return await this.personModel.find(filter).exec();
    // }
}
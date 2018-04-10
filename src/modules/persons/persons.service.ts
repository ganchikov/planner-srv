import {Model, Types} from 'mongoose';
import {Component, UseInterceptors} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Collections} from 'constants/mongo';
import {CounterService} from 'modules/counter/counter.service';
import {CreatePersonDto} from 'dto/create-person.dto';
import {Person} from 'interfaces/person.interface';
import {PersonSchema} from './person.schema';

@Component()
export class PersonsService {

    constructor(@InjectModel(PersonSchema) private readonly personModel: Model<Person>,
                private readonly counterService: CounterService){

    }

    async create(createPersonDto: CreatePersonDto): Promise<Person> {
        const counter = await this.counterService.getCounterIncrement(Collections.people);
        createPersonDto.id = counter.sequence_val;
        const createdItm = new this.personModel(createPersonDto);
        return await createdItm.save();
    }

    async findAll(filter?) {
        return await this.personModel.find(filter).exec();
    }

    async findOne(id: string) {
        return await this.personModel.findById(id).exec();
    }

    async update(id: string, personDto: CreatePersonDto) {
        return await this.personModel.findByIdAndUpdate(id, personDto).exec();
    }

    async delete(id: string) {
        return await this.personModel.findByIdAndRemove(id).exec();
    }
}
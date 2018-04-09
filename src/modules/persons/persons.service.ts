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
        const createdTeam = new this.personModel(createPersonDto);
        return await createdTeam.save();
    }

    async findAll(filter?) {
        return await this.personModel.find(filter).exec();
    }

    async findOne(id: string) {
        return await this.personModel.findOne({id}).exec();
    }

    update(id: string, personDto: CreatePersonDto) {
        return this.personModel.update({_id: new Types.ObjectId(id)}, personDto).exec();
    }

    delete(id: string) {

    }
}
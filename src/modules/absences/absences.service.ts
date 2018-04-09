import {Model, Types} from 'mongoose';
import {Component, UseInterceptors} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import * as MongoCollections from 'constants/mongo/collections';
import {CounterService} from 'modules/counter/counter.service';
import {CreateAbsenceDto} from 'dto/create-absence.dto';
import {Absence} from 'interfaces/absence.interface';
import {AbsenceSchema} from './absence.schema';

@Component()
export class AbsencesService {

    constructor(@InjectModel(AbsenceSchema) private readonly absenceModel: Model<Absence>,
                private readonly counterService: CounterService){

    }

    async create(createAbsenceDto: CreateAbsenceDto) {
        const counter = await this.counterService.getCounterIncrement(MongoCollections.teams);
        createAbsenceDto.id = counter.sequence_val;
        const createdAbsence = new this.absenceModel(createAbsenceDto);
        return await createdAbsence.save();
    }

    async findAll(filter?) {
        return await this.absenceModel.find(filter).exec();
    }

    async findOne(id: string) {
        return await this.absenceModel.findOne({id}).exec();
    }

    update(id: string, absenceDto: CreateAbsenceDto) {
        return this.absenceModel.update({_id: new Types.ObjectId(id)}, absenceDto).exec();
    }

    delete(id: string) {

    }
}
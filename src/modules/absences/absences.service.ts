import {Model, Types} from 'mongoose';
import {Component, UseInterceptors} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Collections} from 'constants/mongo';
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
        const counter = await this.counterService.getCounterIncrement(Collections.teams);
        createAbsenceDto.id = counter.sequence_val;
        const createdAbsence = new this.absenceModel(createAbsenceDto);
        return await createdAbsence.save();
    }

    async findAll(filter?) {
        return await this.absenceModel.find(filter).exec();
    }

    async findOne(id: string) {
        return await this.absenceModel.findById(id).exec();
    }

    async update(id: string, absenceDto: CreateAbsenceDto) {
        return await this.absenceModel.findByIdAndUpdate(id, absenceDto).exec();
    }

    async delete(id: string) {
        return await this.absenceModel.findByIdAndRemove(id).exec();
    }
}
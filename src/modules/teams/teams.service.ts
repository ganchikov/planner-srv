import {Model, Types} from 'mongoose';
import {Component, UseInterceptors} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Collections, TeamDocumentFields, PersonDocumentFields} from 'constants/mongo';
import {CounterService} from 'modules/counter/counter.service';
import {TeamDto} from 'dto/create-team.dto';
import {Team} from 'interfaces/team.interface';
import {TeamSchema} from './team.schema';

@Component()
export class TeamsService {
    private readonly teams: Team[] = [];

    constructor(@InjectModel(TeamSchema) private readonly teamModel: Model<Team>,
                private readonly counterService: CounterService){

    }

    async create(createTeamDto: TeamDto): Promise<Team> {
        const counter = await this.counterService.getCounterIncrement(Collections.teams);
        createTeamDto.id = counter.sequence_val;
        const createdTeam = new this.teamModel(createTeamDto);
        return await createdTeam.save();
    }

    async findAll(filter?) {
        return await this.teamModel.find(filter).exec();
    }

    async findAllWithMembers(filter?) {
        return await this.teamModel.find(filter).populate({path: TeamDocumentFields.members}).exec();
    }

    async findAllWithMembersAbsences(filter?) {
        return await this.teamModel.find(filter).populate({path: TeamDocumentFields.members, populate: {path: PersonDocumentFields.absences}}).exec();
    }

    async findOne(id: string) {
        return await this.teamModel.findById(id).exec();
    }

    async update(id: string, teamDto: TeamDto) {
        return await this.teamModel.findByIdAndUpdate(id, teamDto).exec();
    }

    async delete(id: string) {
        return await this.teamModel.findByIdAndRemove(id).exec();
    }
}
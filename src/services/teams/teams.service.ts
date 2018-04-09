import {Model, Types} from 'mongoose';
import {Component, UseInterceptors} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {CounterService} from 'services/counter/counter.service';
import {TeamDto} from 'dto/create-team.dto';
import {Team} from 'interfaces/team.interface';
import {TeamSchema} from './schemas/team.schema';

@Component()
export class TeamsService {
    private readonly teams: Team[] = [];

    constructor(@InjectModel(TeamSchema) private readonly teamModel: Model<Team>,
                private readonly counterService: CounterService){

    }

    async create(createTeamDto: TeamDto): Promise<Team> {
        const counter = await this.counterService.getCounterIncrement('team');
        createTeamDto.id = counter.sequence_val;
        const createdTeam = new this.teamModel(createTeamDto);
        return await createdTeam.save();
    }

    async findAll() {
        return await this.teamModel.find().exec();
    }

    findOne(id: string): Team {
        return this.teams.find(item => item._id === id);
    }

    update(id: string, teamDto: TeamDto): Promise<any> {
        return this.teamModel.update({_id: new Types.ObjectId(id)}, teamDto).exec();
    }

    delete(id: string) {

    }
}
import {Model, Types} from 'mongoose';
import {Component} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {TeamDto} from '../dto/create-team.dto';
import {Team} from '../interfaces/team.interface';
import {TeamSchema} from './schemas/team.schema';

@Component()
export class TeamsService {
    private readonly teams: Team[] = [];

    constructor(@InjectModel(TeamSchema) private readonly teamModel: Model<Team>){

    }

    async create(createTeamDto: TeamDto): Promise<Team> {
        const createdTeam = new this.teamModel(createTeamDto);
        return await createdTeam.save();
    }

    findAll(): Team[] {
        return this.teams;
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
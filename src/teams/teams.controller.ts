import {Controller, Get, Post, Put, Delete, Req, Res, Body, Param, Query, UsePipes, UseFilters} from '@nestjs/common';
import {TeamDto } from '../dto/create-team.dto';
import {Team} from '../interfaces/team.interface';
import {TeamsService} from './teams.service';
import { ValidationPipe } from '../pipes/validation.pipe';
import {GenericExceptionFilter} from '../exceptions/http-exception.filter';

@Controller('teams')
@UseFilters(new GenericExceptionFilter())
export class TeamsController {
    constructor(private readonly teamsService: TeamsService) {}

    @Get()
    async findAll(@Req() request, @Query() query, @Res() res, @Body() body): Promise<Team[]> {
        return this.teamsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Team> {
        return this.teamsService.findOne(id);
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() teamDto: TeamDto): Promise<Team> {
        return this.teamsService.create(teamDto);
    }

    @Put(':id')
    async update(@Req() req, @Param('id') id: string, @Body() teamDto: TeamDto) {
        return this.teamsService.update(id, teamDto);
    }

    @Delete()
    async delete(@Param('id') id) {
        this.teamsService.delete(id);
    }
}
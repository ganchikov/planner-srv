import {Controller, Get, Post, Put, Delete, Req, Res, Body, Param, Query, UsePipes, UseFilters, UseInterceptors} from '@nestjs/common';
import {TeamDto } from 'dto/create-team.dto';
import {Team} from 'interfaces/team.interface';
import {TeamsService} from './teams.service';
import {PersonsService} from 'modules/persons/persons.service';
import { ValidationPipe } from 'pipes/validation.pipe';
import {GenericExceptionFilter} from 'exceptions/http-exception.filter';

@Controller('teams')
@UseFilters(new GenericExceptionFilter())
export class TeamsController {
    constructor(private readonly teamsService: TeamsService,
                private readonly personsService: PersonsService,
    ) {}

    @Get()
    findAll() {
        return this.teamsService.findAll();
    }

    @Get('members')
    findAllWithMembers() {
        return this.teamsService.findAllWithMembers();
    }

    @Get('members/absences')
    findAllWithMembersAbsences() {
        return this.teamsService.findAllWithMembersAbsences();
    }

    @Get(':id')
    findOne(@Param('id') id) {
        return this.teamsService.findOne(id);
    }

    @Post()
    @UsePipes(new ValidationPipe())
    create(@Body() teamDto: TeamDto) {
        return this.teamsService.create(teamDto);
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    update(@Req() req, @Param('id') id: string, @Body() teamDto: TeamDto) {
        return this.teamsService.update(id, teamDto);
    }

    @Delete(':id')
    delete(@Param('id') id) {
        this.teamsService.delete(id);
    }
}
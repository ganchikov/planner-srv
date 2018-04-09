import {Controller, Get, Post, Put, Delete, Req, Res, Body, Param, Query, UsePipes, UseFilters, UseInterceptors} from '@nestjs/common';
import {CreateAbsenceDto } from 'dto/create-absence.dto';
import {Absence} from 'interfaces/absence.interface';
import {AbsencesService} from './absences.service';
import { ValidationPipe } from 'pipes/validation.pipe';
import {GenericExceptionFilter} from 'exceptions/http-exception.filter';

@Controller('absences')
@UseFilters(new GenericExceptionFilter())
export class AbsencesController {
    constructor(private readonly absencesService: AbsencesService) {}

    @Get()
    async findAll() {
        return this.absencesService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Absence> {
        return this.absencesService.findOne(id);
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() absenceDto: CreateAbsenceDto) {
        return this.absencesService.create(absenceDto);
    }

    @Put(':id')
    async update(@Req() req, @Param('id') id: string, @Body() absenceDto: CreateAbsenceDto) {
        return this.absencesService.update(id, absenceDto);
    }

    @Delete()
    async delete(@Param('id') id) {
        this.absencesService.delete(id);
    }
}
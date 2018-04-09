import {Controller, Get, Post, Put, Delete, Req, Res, Body, Param, Query, UsePipes, UseFilters, UseInterceptors} from '@nestjs/common';
import {CreatePersonDto } from 'dto/create-person.dto';
import {Person} from 'interfaces/person.interface';
import {PersonsService} from './persons.service';
import { ValidationPipe } from 'pipes/validation.pipe';
import {GenericExceptionFilter} from 'exceptions/http-exception.filter';

@Controller('people')
@UseFilters(new GenericExceptionFilter())
export class PersonsController {
    constructor(private readonly personsService: PersonsService) {}

    @Get()
    findAll() {
        return this.personsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id) {
        return this.personsService.findOne(id);
    }

    @Post()
    @UsePipes(new ValidationPipe())
    create(@Body() personDto: CreatePersonDto): Promise<Person> {
        return this.personsService.create(personDto);
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    update(@Param('id') id, @Body() personDto: CreatePersonDto) {
        return this.personsService.update(id, personDto);
    }

    @Delete(':id')
    delete(@Param('id') id) {
        this.personsService.delete(id);
    }
}
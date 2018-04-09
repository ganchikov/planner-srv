import {CreateAbsenceDto} from './create-absence.dto';
import { IsString, IsNotEmpty, ValidateNested } from 'class-validator';

export class CreatePersonDto {
    id: number;
    @IsString()
    readonly name: string;
    @ValidateNested()
    readonly absences: CreateAbsenceDto[];
}
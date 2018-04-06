import {CreatePersonDto} from './create-person.dto';
import { IsString, ValidateNested } from 'class-validator';

export class TeamDto {
    @IsString()
    readonly name: string;
    @ValidateNested()
    readonly members: CreatePersonDto[];
}
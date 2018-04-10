import { IsString, IsNotEmpty, ValidateNested, IsBoolean, IsDateString } from 'class-validator';

export class CreateAbsenceDto {
    id: number;
    @IsString()
    readonly name: string;
    @IsString()
    readonly absence_type: string;
    @IsBoolean()
    readonly confirmed: boolean;
    @IsDateString()
    readonly start_date: Date;
    @IsDateString()
    readonly end_date: Date;
}
import { IsString, IsNotEmpty, ValidateNested, IsBoolean, IsDate } from 'class-validator';

export class CreateAbsenceDto {
    id: number;
    @IsString()
    readonly text: string;
    @IsString()
    readonly type: string;
    @IsBoolean()
    readonly confirmed: boolean;
    @IsDate()
    readonly start_date: Date;
    @IsDate()
    readonly end_date: Date;
}
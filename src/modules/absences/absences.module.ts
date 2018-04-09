import {Module, Global} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {AbsencesController} from './absences.controller';
import {AbsencesService} from './absences.service';
import {AbsenceSchema} from './absence.schema';

@Global()
@Module({
    imports: [
        MongooseModule.forFeature([{name: 'absence', schema: AbsenceSchema}]),
    ],
    controllers: [AbsencesController],
    components: [AbsencesService],
    exports: [AbsencesService],
})
export class AbsencesModule {}
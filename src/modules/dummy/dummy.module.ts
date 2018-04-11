import {Module, Global} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Collections} from 'constants/mongo';
import {DatabaseModule} from '../database/database.module';
import {DummyProvider} from './dummy.provider';
import {DummyService} from './dummy.service';
import {DummySchema} from './dummy.schema';

@Global()
@Module({
    imports: [
        // MongooseModule.forFeature([{name: 'dummy', schema: DummySchema}]),
        DatabaseModule,
    ],
    // controllers: [PersonsController],
    components: [DummyService, DummyProvider],
    // exports: [PersonsService],
})
export class DummyModule {}
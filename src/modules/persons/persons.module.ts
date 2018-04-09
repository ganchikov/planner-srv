import {Module, Global} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Collections} from 'constants/mongo';
import {PersonsController} from './persons.controller';
import {PersonsService} from './persons.service';
import {PersonSchema} from './person.schema';

@Global()
@Module({
    imports: [
        MongooseModule.forFeature([{name: Collections.people, schema: PersonSchema}]),
    ],
    controllers: [PersonsController],
    components: [PersonsService],
    exports: [PersonsService],
})
export class PersonsModule {}
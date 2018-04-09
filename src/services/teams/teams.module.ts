import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {CounterModule} from 'services/counter/counter.module';
import {TeamsController} from './teams.controller';
import {TeamsService} from './teams.service';
import {TeamSchema} from './schemas/team.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Team', schema: TeamSchema}]),
        CounterModule,
    ],
    controllers: [TeamsController],
    components: [TeamsService],
    exports: [TeamsService],
})
export class TeamsModule {}
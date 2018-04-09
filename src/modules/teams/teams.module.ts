import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Collections} from 'constants/mongo';
import {TeamsController} from './teams.controller';
import {TeamsService} from './teams.service';
import {TeamSchema} from './team.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{name: Collections.teams, schema: TeamSchema}]),
    ],
    controllers: [TeamsController],
    components: [TeamsService],
    exports: [TeamsService],
})
export class TeamsModule {}
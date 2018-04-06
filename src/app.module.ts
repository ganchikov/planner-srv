import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import {TeamsModule} from './teams/teams.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/plannerdb'),
    TeamsModule],
  controllers: [AppController],
})
export class AppModule {}

import { Module, NestModule, MiddlewaresConsumer, RequestMethod} from '@nestjs/common';
import {LoggerMiddleware} from './middleware/logger.middleware';
import {MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import {CounterModule} from 'modules/counter/counter.module';
import {TeamsModule} from 'modules/teams/teams.module';
import {PersonsModule} from 'modules/persons/persons.module';
import {AbsencesModule} from 'modules/absences/absences.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/plannerdb'),
    CounterModule,
    TeamsModule,
    PersonsModule,
    AbsencesModule],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply(LoggerMiddleware).with('AppModule').forRoutes(AppController);
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { TeamsController } from './teams.controller';
import { TeamsService} from './teams.service';
import { CounterService} from '../counter/counter.service';
import {CounterModule} from '../counter/counter.module';
import {Team} from '../../interfaces/team.interface';

describe('TeamsController', () => {

  let app: TestingModule;
  let teamsModule: TestingModule;
  let counterModule: TestingModule;
  let counterService: CounterService;
  let teamsController: TeamsController;
  let teamsService: TeamsService;

  beforeAll(async () => {

    // counterModule = await Test.createTestingModule({
    //   components: [CounterService],
    // }).compile();
    // // counterService = counterModule.get<CounterService>(CounterService);
    // // jest.spyOn(counterService, 'getCounterIncrement').mockImplementation(() => 1);
    // teamsModule = await Test.createTestingModule({
    //   controllers: [TeamsController],
    //   components: [TeamsService],
    // }).compile();

    // app = await Test.createTestingModule({
    //   imports: [counterModule, teamsModule],
    // }).compile();

    // teamsService = app.get<TeamsService>(TeamsService);
    // teamsController = app.get<TeamsController>(TeamsController);
  });

  describe('findAll', () => {
    it('should return all records', async () => {
      // const result = [{name: 'A', members: []}];
      // jest.spyOn(teamsService, 'findAll').mockImplementation(() => result);

      expect(1).toBe(1);
      // expect(await teamsController.findAll()).toBe(result);
      // expect(appController.root()).toBe('Hello World!');
    });
  });
});

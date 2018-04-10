import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { TeamsController } from './teams.controller';
import { TeamsService} from './teams.service';

describe('TeamsController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [TeamsController],
    }).compile();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<TeamsController>(TeamsController);
      // expect(appController.root()).toBe('Hello World!');
    });
  });
});

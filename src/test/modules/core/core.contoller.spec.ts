import { Test, TestingModule } from '@nestjs/testing';
import { CoreController } from '../../../modules/core/core.controller';
import { CoreService } from '../../../modules/core/core.service';
import { LoggerService } from '../../../common/logging/logger.service';



describe('CoreController', () => {
  let coreController: CoreController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ CoreController ],
      providers: [ CoreService, LoggerService ],
    }).compile();

    coreController = app.get<CoreController>(CoreController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(coreController.getStatus()).toBe('Hello World! This is a NestJS application.');
    });
  });
});
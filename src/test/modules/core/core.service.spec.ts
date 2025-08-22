import { LoggerService } from "../../../common/logging/logger.service";
import { CoreService } from "../../../modules/core/core.service";

describe('CoreService', () => {
  let coreService: CoreService;
  let logger: LoggerService;

  beforeEach(() => {
    logger = {
      setContext: jest.fn(),
      info: jest.fn(),
    } as unknown as LoggerService;

    coreService = new CoreService(logger);
  });

  it('should log and return status message', () => {
    const result = coreService.getStatus();
    expect(result).toBe('Hello World! This is a NestJS application.');
  });
});
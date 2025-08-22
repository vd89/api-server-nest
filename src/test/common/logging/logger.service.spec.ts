import { LoggerService } from '../../../common/logging/logger.service';

describe('LoggerService', () => {
  let logger: LoggerService;

  beforeEach(() => {
    logger = new LoggerService();
    // Mock the pino logger methods
    logger[ 'logger' ] = {
      info: jest.fn(),
      error: jest.fn(),
      warn: jest.fn(),
      debug: jest.fn(),
      child: jest.fn().mockReturnThis(),
    } as any;
  });

  it('should log info', () => {
    logger.info('info');
    expect(logger[ 'logger' ].info).toHaveBeenCalledWith({ args: [] }, 'info');
  });

  it('should log error', () => {
    logger.error('error');
    expect(logger[ 'logger' ].error).toHaveBeenCalledWith({ args: [] }, 'error');
  });

  it('should log warn', () => {
    logger.warn('warn');
    expect(logger[ 'logger' ].warn).toHaveBeenCalledWith({ args: [] }, 'warn');
  });
});
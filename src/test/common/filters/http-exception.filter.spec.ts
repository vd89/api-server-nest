import { AllExceptionsFilter } from '../../../common/filters/http-exception.filter';
import { ArgumentsHost, HttpException } from '@nestjs/common';

describe('AllExceptionsFilter', () => {
  let filter: AllExceptionsFilter;

  beforeEach(() => {
    filter = new AllExceptionsFilter();
  });

  it('should handle HttpException', () => {
    const mockResponse = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const mockRequest = { url: '/test' };
    const mockHost = {
      switchToHttp: () => ({
        getResponse: () => mockResponse,
        getRequest: () => mockRequest,
      }),
    } as unknown as ArgumentsHost;

    const exception = new HttpException('Forbidden', 403);
    filter.catch(exception, mockHost);

    expect(mockResponse.status).toHaveBeenCalledWith(403);
    expect(mockResponse.json).toHaveBeenCalled();
  });

  it('should handle unknown exception', () => {
    const mockResponse = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const mockRequest = { url: '/test' };
    const mockHost = {
      switchToHttp: () => ({
        getResponse: () => mockResponse,
        getRequest: () => mockRequest,
      }),
    } as unknown as ArgumentsHost;

    filter.catch(new Error('Unknown'), mockHost);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalled();
  });
});
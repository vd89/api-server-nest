import { ResponseInterceptor } from '../../../common/interceptors/response.interceptor';
import { ExecutionContext, CallHandler } from '@nestjs/common';
import { of } from 'rxjs';

describe('ResponseInterceptor', () => {
  it('should wrap response', (done) => {
    const interceptor = new ResponseInterceptor();
    const context = {} as ExecutionContext;
    const callHandler: CallHandler = {
      handle: () => of('data'),
    };

    interceptor.intercept(context, callHandler).subscribe((result) => {
      expect(result).toEqual({
        status: 'success',
        data: 'data',
        message: null,
        error: null,
      });
      done();
    });
  });
});
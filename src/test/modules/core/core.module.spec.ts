import { CoreModule } from '../../../modules/core/core.module';
import { UpdateCoreDto } from '../../../modules/core/dto/update-core.dto';
import { CreateCoreDto } from '../../../modules/core/dto/create-core.dto';


describe('CoreModule', () => {
  it('should be defined', () => {
    expect(CoreModule).toBeDefined();
  });
});


describe('UpdateCoreDto', () => {
  it('should be defined', () => {
    expect(UpdateCoreDto).toBeDefined();
  });
});

describe('CreateCoreDto', () => {
  it('should be defined', () => {
    expect(CreateCoreDto).toBeDefined();
  });
});
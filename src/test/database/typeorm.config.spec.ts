import { typeOrmConfig } from '../../database/typeorm.config';

describe('typeOrmConfig', () => {
  it('should be defined', () => {
    expect(typeOrmConfig).toBeDefined();
  });
  it('should have correct database type', () => {
    expect(typeOrmConfig.type).toBe('postgres');
  });
});
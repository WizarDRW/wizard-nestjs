import { Test, TestingModule } from '@nestjs/testing';
import { UseroptionService } from './user.option.service';

describe('UseroptionService', () => {
  let service: UseroptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UseroptionService],
    }).compile();

    service = module.get<UseroptionService>(UseroptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

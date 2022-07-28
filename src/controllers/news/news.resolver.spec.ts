import { Test, TestingModule } from '@nestjs/testing';
import { NewsResolver } from './news.resolver';

describe('NewsResolver', () => {
  let resolver: NewsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsResolver],
    }).compile();

    resolver = module.get<NewsResolver>(NewsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

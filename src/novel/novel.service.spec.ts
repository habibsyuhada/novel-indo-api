import { Test, TestingModule } from '@nestjs/testing';
import { NovelService } from './novel.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Novel } from './entities/novel.entity';
import { Repository } from 'typeorm';

describe('NovelService', () => {
  let service: NovelService;
  let repository: Repository<Novel>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NovelService,
        {
          provide: getRepositoryToken(Novel),
          useValue: {
            create: jest.fn().mockReturnValue({}),
            save: jest.fn().mockResolvedValue({}),
            find: jest.fn().mockResolvedValue([]),
            findOne: jest.fn().mockResolvedValue({}),
            update: jest.fn().mockResolvedValue({}),
            delete: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    }).compile();

    service = module.get<NovelService>(NovelService);
    repository = module.get<Repository<Novel>>(getRepositoryToken(Novel));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

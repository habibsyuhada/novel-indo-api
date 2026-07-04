import { Test, TestingModule } from '@nestjs/testing';
import { NovelChapterService } from './novel-chapter.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NovelChapter } from './entities/novel-chapter.entity';
import { Repository } from 'typeorm';

describe('NovelChapterService', () => {
  let service: NovelChapterService;
  let repository: Repository<NovelChapter>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NovelChapterService,
        {
          provide: getRepositoryToken(NovelChapter),
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

    service = module.get<NovelChapterService>(NovelChapterService);
    repository = module.get<Repository<NovelChapter>>(getRepositoryToken(NovelChapter));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

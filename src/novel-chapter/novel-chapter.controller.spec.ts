import { Test, TestingModule } from '@nestjs/testing';
import { NovelChapterController } from './novel-chapter.controller';
import { NovelChapterService } from './novel-chapter.service';

describe('NovelChapterController', () => {
  let controller: NovelChapterController;
  let service: NovelChapterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NovelChapterController],
      providers: [
        {
          provide: NovelChapterService,
          useValue: {
            create: jest.fn().mockResolvedValue({}),
            findAll: jest.fn().mockResolvedValue([]),
            findOne: jest.fn().mockResolvedValue({}),
            update: jest.fn().mockResolvedValue({}),
            remove: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    }).compile();

    controller = module.get<NovelChapterController>(NovelChapterController);
    service = module.get<NovelChapterService>(NovelChapterService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

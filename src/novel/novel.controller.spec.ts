import { Test, TestingModule } from '@nestjs/testing';
import { NovelController } from './novel.controller';
import { NovelService } from './novel.service';

describe('NovelController', () => {
  let controller: NovelController;
  let service: NovelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NovelController],
      providers: [
        {
          provide: NovelService,
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

    controller = module.get<NovelController>(NovelController);
    service = module.get<NovelService>(NovelService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

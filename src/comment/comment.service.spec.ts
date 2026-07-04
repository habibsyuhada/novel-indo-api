import { Test, TestingModule } from '@nestjs/testing';
import { CommentService } from './comment.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';

describe('CommentService', () => {
  let service: CommentService;
  let repository: Repository<Comment>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommentService,
        {
          provide: getRepositoryToken(Comment),
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

    service = module.get<CommentService>(CommentService);
    repository = module.get<Repository<Comment>>(getRepositoryToken(Comment));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

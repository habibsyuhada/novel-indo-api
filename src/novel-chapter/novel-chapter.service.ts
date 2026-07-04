import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NovelChapter } from './entities/novel-chapter.entity';

@Injectable()
export class NovelChapterService {
  constructor(
    @InjectRepository(NovelChapter)
    private novelChapterRepository: Repository<NovelChapter>,
  ) {}

  findAll() {
    return this.novelChapterRepository.find();
  }

  findOne(id: number | string) {
    return this.novelChapterRepository.findOne({ where: { id: id as any } });
  }

  remove(id: number | string) {
    return this.novelChapterRepository.delete(id);
  }
}

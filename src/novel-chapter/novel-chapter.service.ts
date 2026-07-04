import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NovelChapter } from './entities/novel-chapter.entity';
import { CreateNovelChapterDto } from './dto/create-novel-chapter.dto';
import { UpdateNovelChapterDto } from './dto/update-novel-chapter.dto';

@Injectable()
export class NovelChapterService {
  constructor(
    @InjectRepository(NovelChapter)
    private readonly novelChapterRepository: Repository<NovelChapter>,
  ) {}

  create(createNovelChapterDto: CreateNovelChapterDto) {
    const newNovelChapter = this.novelChapterRepository.create(createNovelChapterDto as any);
    return this.novelChapterRepository.save(newNovelChapter);
  }

  findAll() {
    return this.novelChapterRepository.find();
  }

  findOne(id: number | string) {
    return this.novelChapterRepository.findOne({ where: { id: id as any } });
  }

  findOneByNovelAndChapter(novelId: number, chapter: number) {
    return this.novelChapterRepository.findOne({ 
      where: { novel: novelId, chapter: chapter } 
    });
  }

  update(id: number | string, updateNovelChapterDto: UpdateNovelChapterDto) {
    return this.novelChapterRepository.update(id, updateNovelChapterDto as any);
  }

  remove(id: number | string) {
    return this.novelChapterRepository.delete(id);
  }
}

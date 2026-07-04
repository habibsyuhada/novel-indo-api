import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Novel } from './entities/novel.entity';
import { CreateNovelDto } from './dto/create-novel.dto';
import { UpdateNovelDto } from './dto/update-novel.dto';

@Injectable()
export class NovelService {
  constructor(
    @InjectRepository(Novel)
    private readonly novelRepository: Repository<Novel>,
  ) {}

  create(createNovelDto: CreateNovelDto) {
    const newNovel = this.novelRepository.create(createNovelDto as any);
    return this.novelRepository.save(newNovel);
  }

  findAll() {
    return this.novelRepository.find();
  }

  findOne(id: number | string) {
    return this.novelRepository.findOne({ where: { id: id as any } });
  }

  update(id: number | string, updateNovelDto: UpdateNovelDto) {
    return this.novelRepository.update(id, updateNovelDto as any);
  }

  remove(id: number | string) {
    return this.novelRepository.delete(id);
  }
}

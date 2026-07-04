import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Novel } from './entities/novel.entity';

@Injectable()
export class NovelService {
  constructor(
    @InjectRepository(Novel)
    private novelRepository: Repository<Novel>,
  ) {}

  findAll() {
    return this.novelRepository.find();
  }

  findOne(id: number | string) {
    return this.novelRepository.findOne({ where: { id: id as any } });
  }

  remove(id: number | string) {
    return this.novelRepository.delete(id);
  }
}

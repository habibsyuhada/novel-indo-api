import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  findAll() {
    return this.commentRepository.find();
  }

  findOne(id: number | string) {
    return this.commentRepository.findOne({ where: { id: id as any } });
  }

  remove(id: number | string) {
    return this.commentRepository.delete(id);
  }
}

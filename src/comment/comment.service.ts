import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  create(createCommentDto: CreateCommentDto) {
    const newComment = this.commentRepository.create(createCommentDto as any);
    return this.commentRepository.save(newComment);
  }

  findAll() {
    return this.commentRepository.find();
  }

  findOne(id: number | string) {
    return this.commentRepository.findOne({ where: { id: id as any } });
  }

  update(id: number | string, updateCommentDto: UpdateCommentDto) {
    return this.commentRepository.update(id, updateCommentDto as any);
  }

  remove(id: number | string) {
    return this.commentRepository.delete(id);
  }
}

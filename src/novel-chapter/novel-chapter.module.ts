import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NovelChapterService } from './novel-chapter.service';
import { NovelChapterController } from './novel-chapter.controller';
import { NovelChapter } from './entities/novel-chapter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NovelChapter])],
  controllers: [NovelChapterController],
  providers: [NovelChapterService],
})
export class NovelChapterModule {}

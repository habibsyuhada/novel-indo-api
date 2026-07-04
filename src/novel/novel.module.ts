import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NovelService } from './novel.service';
import { NovelController } from './novel.controller';
import { Novel } from './entities/novel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Novel])],
  controllers: [NovelController],
  providers: [NovelService],
})
export class NovelModule {}

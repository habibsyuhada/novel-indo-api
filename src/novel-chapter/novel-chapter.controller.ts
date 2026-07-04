import { Controller, Get, Param, Delete } from '@nestjs/common';
import { NovelChapterService } from './novel-chapter.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('novel-chapter')
@Controller('novel-chapter')
export class NovelChapterController {
  constructor(private readonly novelChapterService: NovelChapterService) {}

  @Get()
  findAll() {
    return this.novelChapterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.novelChapterService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.novelChapterService.remove(id);
  }
}

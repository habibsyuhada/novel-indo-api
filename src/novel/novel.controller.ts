import { Controller, Get, Param, Delete } from '@nestjs/common';
import { NovelService } from './novel.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('novel')
@Controller('novel')
export class NovelController {
  constructor(private readonly novelService: NovelService) {}

  @Get()
  findAll() {
    return this.novelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.novelService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.novelService.remove(id);
  }
}

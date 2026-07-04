import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NovelService } from './novel.service';
import { CreateNovelDto } from './dto/create-novel.dto';
import { UpdateNovelDto } from './dto/update-novel.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { Novel } from './entities/novel.entity';

@ApiTags('novel')
@Controller('novel')
export class NovelController {
  constructor(private readonly novelService: NovelService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new novel' })
  @ApiResponse({ status: 201, description: 'The novel has been successfully created.', type: Novel })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createNovelDto: CreateNovelDto) {
    return this.novelService.create(createNovelDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all novels' })
  @ApiResponse({ status: 200, description: 'Return all novels.', type: [Novel] })
  findAll() {
    return this.novelService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single novel by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the novel', type: 'string' })
  @ApiResponse({ status: 200, description: 'Return a single novel.', type: Novel })
  @ApiResponse({ status: 404, description: 'Novel not found.' })
  findOne(@Param('id') id: string) {
    return this.novelService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a novel' })
  @ApiParam({ name: 'id', description: 'The ID of the novel', type: 'string' })
  @ApiResponse({ status: 200, description: 'The novel has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Novel not found.' })
  update(@Param('id') id: string, @Body() updateNovelDto: UpdateNovelDto) {
    return this.novelService.update(id, updateNovelDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a novel' })
  @ApiParam({ name: 'id', description: 'The ID of the novel', type: 'string' })
  @ApiResponse({ status: 200, description: 'The novel has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Novel not found.' })
  remove(@Param('id') id: string) {
    return this.novelService.remove(id);
  }
}

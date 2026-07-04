import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { NovelChapterService } from './novel-chapter.service';
import { CreateNovelChapterDto } from './dto/create-novel-chapter.dto';
import { UpdateNovelChapterDto } from './dto/update-novel-chapter.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { NovelChapter } from './entities/novel-chapter.entity';

@ApiTags('novel-chapter')
@Controller('novel-chapter')
export class NovelChapterController {
  constructor(private readonly novelChapterService: NovelChapterService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new novel-chapter' })
  @ApiResponse({ status: 201, description: 'The novel-chapter has been successfully created.', type: NovelChapter })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createNovelChapterDto: CreateNovelChapterDto) {
    return this.novelChapterService.create(createNovelChapterDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all novel-chapters' })
  @ApiQuery({ name: 'includeText', required: false, type: 'boolean', description: 'Whether to include the chapter text content' })
  @ApiResponse({ status: 200, description: 'Return all novel-chapters.', type: [NovelChapter] })
  findAll(@Query('includeText') includeText?: string) {
    const shouldIncludeText = includeText === 'true';
    return this.novelChapterService.findAll(shouldIncludeText);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single novel-chapter by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the novel-chapter', type: 'string' })
  @ApiQuery({ name: 'includeText', required: false, type: 'boolean', description: 'Whether to include the chapter text content' })
  @ApiResponse({ status: 200, description: 'Return a single novel-chapter.', type: NovelChapter })
  @ApiResponse({ status: 404, description: 'NovelChapter not found.' })
  findOne(@Param('id') id: string, @Query('includeText') includeText?: string) {
    const shouldIncludeText = includeText === 'true';
    return this.novelChapterService.findOne(id, shouldIncludeText);
  }

  @Get('novel/:novelId/chapter/:chapter')
  @ApiOperation({ summary: 'Get a single novel-chapter by novel ID and chapter number' })
  @ApiParam({ name: 'novelId', description: 'The ID of the novel', type: 'number' })
  @ApiParam({ name: 'chapter', description: 'The chapter number', type: 'number' })
  @ApiQuery({ name: 'includeText', required: false, type: 'boolean', description: 'Whether to include the chapter text content' })
  @ApiResponse({ status: 200, description: 'Return a single novel-chapter.', type: NovelChapter })
  @ApiResponse({ status: 404, description: 'NovelChapter not found.' })
  findOneByNovelAndChapter(
    @Param('novelId') novelId: string, 
    @Param('chapter') chapter: string,
    @Query('includeText') includeText?: string
  ) {
    const shouldIncludeText = includeText === 'true';
    return this.novelChapterService.findOneByNovelAndChapter(+novelId, +chapter, shouldIncludeText);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a novel-chapter' })
  @ApiParam({ name: 'id', description: 'The ID of the novel-chapter', type: 'string' })
  @ApiResponse({ status: 200, description: 'The novel-chapter has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'NovelChapter not found.' })
  update(@Param('id') id: string, @Body() updateNovelChapterDto: UpdateNovelChapterDto) {
    return this.novelChapterService.update(id, updateNovelChapterDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a novel-chapter' })
  @ApiParam({ name: 'id', description: 'The ID of the novel-chapter', type: 'string' })
  @ApiResponse({ status: 200, description: 'The novel-chapter has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'NovelChapter not found.' })
  remove(@Param('id') id: string) {
    return this.novelChapterService.remove(id);
  }
}

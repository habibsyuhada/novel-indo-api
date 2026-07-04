import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { Comment } from './entities/comment.entity';

@ApiTags('comment')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new comment' })
  @ApiResponse({ status: 201, description: 'The comment has been successfully created.', type: Comment })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all comments' })
  @ApiResponse({ status: 200, description: 'Return all comments.', type: [Comment] })
  findAll() {
    return this.commentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single comment by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the comment', type: 'string' })
  @ApiResponse({ status: 200, description: 'Return a single comment.', type: Comment })
  @ApiResponse({ status: 404, description: 'Comment not found.' })
  findOne(@Param('id') id: string) {
    return this.commentService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a comment' })
  @ApiParam({ name: 'id', description: 'The ID of the comment', type: 'string' })
  @ApiResponse({ status: 200, description: 'The comment has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Comment not found.' })
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentService.update(id, updateCommentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a comment' })
  @ApiParam({ name: 'id', description: 'The ID of the comment', type: 'string' })
  @ApiResponse({ status: 200, description: 'The comment has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Comment not found.' })
  remove(@Param('id') id: string) {
    return this.commentService.remove(id);
  }
}

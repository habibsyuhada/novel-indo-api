import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty({ example: 1, description: 'The ID of the associated novel', required: false })
  novel_id?: number;

  @ApiProperty({ example: 1, description: 'The ID of the associated chapter (optional)', required: false })
  chapter_id?: number;

  @ApiProperty({ example: 'Great chapter! Looking forward to the next one.', description: 'The text content of the comment' })
  comment: string;

  @ApiProperty({ example: 'b02b55f1-3311-4770-b8ed-bda50ef50d53', description: 'The UUID of the user making the comment', required: false })
  user_id?: string;

  @ApiProperty({ example: 'John Doe', description: 'The display name of the user', required: false })
  name?: string;
}
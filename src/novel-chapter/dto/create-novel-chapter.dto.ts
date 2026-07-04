import { ApiProperty } from '@nestjs/swagger';

export class CreateNovelChapterDto {
  @ApiProperty({ example: 1, description: 'The ID of the associated novel' })
  novel: number;

  @ApiProperty({ example: 1.5, description: 'The chapter number' })
  chapter: number;

  @ApiProperty({ example: 'The Departure', description: 'The title of the chapter', required: false })
  title?: string;

  @ApiProperty({ example: 'In a hole in the ground there lived a hobbit...', description: 'The text content of the chapter' })
  text: string;

  @ApiProperty({ example: 'the-departure', description: 'Unique URL slug for the chapter', required: false })
  url?: string;

  @ApiProperty({ example: 0, description: 'Number of reports for the chapter content', required: false })
  report?: number;
}
import { ApiProperty } from '@nestjs/swagger';

export class CreateNovelDto {
  @ApiProperty({ example: 'The Lord of the Rings', description: 'The title of the novel' })
  name: string;

  @ApiProperty({ example: 'J.R.R. Tolkien', description: 'The author of the novel' })
  author: string;

  @ApiProperty({ example: 'Fantasy', description: 'The genre of the novel' })
  genre: string;

  @ApiProperty({ example: 1, description: 'The status of the novel (e.g., 0 for ongoing, 1 for completed)', required: false })
  status?: number;

  @ApiProperty({ example: 'George Allen & Unwin', description: 'The publishers of the novel', required: false })
  publishers?: string;

  @ApiProperty({ example: 'adventure, magic, rings', description: 'Tags associated with the novel', required: false })
  tag?: string;

  @ApiProperty({ example: 1954, description: 'The year the novel was published', required: false })
  year?: number;

  @ApiProperty({ example: 'An epic high fantasy novel...', description: 'A brief description of the novel', required: false })
  description?: string;

  @ApiProperty({ example: 'https://example.com/cover.jpg', description: 'URL to the novel cover image', required: false })
  cover?: string;

  @ApiProperty({ example: 'the-lord-of-the-rings', description: 'Unique URL slug for the novel' })
  url: string;

  @ApiProperty({ example: 'the-lord-of-the-rings-translated', description: 'Last translated URL slug', required: false })
  last_url_translated?: string;

  @ApiProperty({ example: 0, description: 'Flag to hide the novel (1 for hidden, 0 for visible)', required: false })
  is_hidden?: number;
}
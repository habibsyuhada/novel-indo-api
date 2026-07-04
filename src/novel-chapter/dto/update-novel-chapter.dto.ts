import { PartialType } from '@nestjs/swagger';
import { CreateNovelChapterDto } from './create-novel-chapter.dto';

export class UpdateNovelChapterDto extends PartialType(CreateNovelChapterDto) {}
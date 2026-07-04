import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { Novel } from '../../novel/entities/novel.entity';

@Entity('novel_chapter')
@Index('novel_chapter_novel_chapter_idx', ['novel', 'chapter'])
export class NovelChapter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: true })
  novel: number;

  @ManyToOne(() => Novel)
  @JoinColumn({ name: 'novel' })
  novelEntity: Novel;

  @Column({ type: 'numeric', nullable: true })
  chapter: number;

  @Column({ type: 'varchar', nullable: true })
  title: string;

  @Column({ type: 'text', nullable: true })
  text: string;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  created_date: Date;

  @Column({ type: 'text', nullable: true })
  url: string;

  @Column({ type: 'int2', nullable: true })
  report: number;
}
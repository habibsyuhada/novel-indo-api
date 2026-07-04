import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('comment')
export class Comment {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string; // bigint is represented as string in JS

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @Column({ type: 'int', nullable: true })
  novel_id: number;

  @Column({ type: 'int', nullable: true })
  chapter_id: number;

  @Column({ type: 'text', nullable: true })
  comment: string;

  @Column({ type: 'uuid', default: () => 'gen_random_uuid()', nullable: true })
  user_id: string;

  @Column({ type: 'text', nullable: true })
  name: string;
}
import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity('novel')
export class Novel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  author: string;

  @Column({ type: 'varchar', nullable: true })
  genre: string;

  @Column({ type: 'int', default: 0, nullable: true })
  status: number;

  @Column({ type: 'varchar', nullable: true })
  publishers: string;

  @Column({ type: 'text', nullable: true })
  tag: string;

  @Column({ type: 'int', nullable: true })
  year: number;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'varchar', nullable: true })
  cover: string;

  @Column({ type: 'text', nullable: true, unique: true })
  url: string;

  @Column({ type: 'text', nullable: true })
  last_url_translated: string;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_date: Date;

  @Column({ type: 'int', default: 0, nullable: true })
  is_hidden: number;

  @Column({ type: 'int', default: 0, nullable: true })
  total_view: number;

  @Column({ type: 'int', default: 0, nullable: true })
  total_month_view: number;

  @Column({ type: 'timestamp', nullable: true })
  month_view: Date;
}
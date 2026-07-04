import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from './comment/comment.module';
import { NovelModule } from './novel/novel.module';
import { NovelChapterModule } from './novel-chapter/novel-chapter.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_DATABASE || 'postgres',
      autoLoadEntities: true,
      synchronize: false, // Recommended false for production and manually defining tables as per user's sql
    }),
    CommentModule,
    NovelModule,
    NovelChapterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

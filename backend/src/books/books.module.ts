import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { Author } from 'src/authors/entities/author.entity';
import { Book } from './entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Author])],
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}

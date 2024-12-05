import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  // Route to fetch all books
  // @Get()
  // async findAll(): Promise<Book[]> {
  //   return this.booksService.findAll();
  // }

  // Route to fetch books by author ID
  @Get(':authorId')
  async findBooksByAuthorId(@Param('authorId') id: number): Promise<Book[]> {
    return this.booksService.findBooksByAuthorId(id);
  }
}

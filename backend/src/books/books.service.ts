import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  // Fetch all books
  // async findAll(): Promise<Book[]> {
  //   return this.booksRepository.find();
  // }

  // Fetch books by author ID
  async findBooksByAuthorId(authorId: number): Promise<Book[]> {
    return this.booksRepository.find({ where: { author: { id: authorId } } });
  }
}

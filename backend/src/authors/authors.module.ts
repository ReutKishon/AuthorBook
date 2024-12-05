import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { Author } from './entities/author.entity';
import { Book } from '../books/entities/book.entity';

@Module({
  imports: [
    // Import TypeOrmModule for Author and Book entities
    TypeOrmModule.forFeature([Author, Book]),
  ],
  providers: [AuthorsService], // Register the AuthorsService to handle business logic
  controllers: [AuthorsController], // Register the AuthorsController to handle HTTP requests
})
export class AuthorsModule {}

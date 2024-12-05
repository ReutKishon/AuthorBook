import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from '../authors/entities/author.entity';
import { Book } from '../books/entities/book.entity';
import { faker } from '@faker-js/faker'; // Import faker

@Injectable()
export class DataGeneratorService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,

    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  // Function to generate authors and books
  async generateData() {
    for (let i = 0; i < 10; i++) {
      const author = new Author();
      author.name = faker.person.fullName();
      author.birth_year = faker.date.past({ years: 60 }).getFullYear();
      author.about = `${author.name} is a bestselling author known for his compelling stories and deep insights into human nature.`;
      author.rating = faker.number.int({ min: 1, max: 5 });

      // Save the author to the database
      const savedAuthor = await this.authorRepository.save(author);

      // Generate and insert books for each author
      for (let j = 0; j < 5; j++) {
        const book = new Book();
        book.title = faker.book.title(); // Title with 3 random words
        book.publication_year = faker.date.past({ years: 30 }).getFullYear();
        book.genre = faker.book.genre();
        book.rating = faker.number.int({ min: 1, max: 5 });
        book.author = savedAuthor; // Link book to the author
        book.about =
          'explores themes such as identity, conflict, personal growth, and the complexity of human nature, while also examining morality, societal influences, and the struggle for meaning in an ever-changing world.';
        await this.bookRepository.save(book);
      }
    }
    console.log('Data generation complete!');
  }
}

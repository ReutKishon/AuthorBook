import { Repository } from 'typeorm';
import { Author } from '../authors/entities/author.entity';
import { Book } from '../books/entities/book.entity';
export declare class DataGeneratorService {
    private readonly authorRepository;
    private readonly bookRepository;
    constructor(authorRepository: Repository<Author>, bookRepository: Repository<Book>);
    generateData(): Promise<void>;
}

import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
export declare class BooksService {
    private booksRepository;
    constructor(booksRepository: Repository<Book>);
    findBooksByAuthorId(authorId: number): Promise<Book[]>;
}

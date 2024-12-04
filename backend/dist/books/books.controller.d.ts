import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    findAll(): Promise<Book[]>;
    findBooksByAuthorId(id: number): Promise<Book[]>;
}
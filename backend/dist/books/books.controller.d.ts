import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    findBooksByAuthorId(id: number): Promise<Book[]>;
}

import { Book } from 'src/books/entities/book.entity';
export declare class Author {
    id: number;
    name: string;
    birth_year: number;
    books: Book[];
}

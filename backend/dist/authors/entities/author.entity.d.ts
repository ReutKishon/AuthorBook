import { Book } from '../../books/entities/book.entity';
export declare class Author {
    id: number;
    name: string;
    birth_year: number;
    about: string | null;
    rating: number | null;
    books: Book[];
}

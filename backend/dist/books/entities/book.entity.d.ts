import { Author } from '../..//authors/entities/author.entity';
export declare class Book {
    id: number;
    title: string;
    publication_year: number;
    genre: string;
    about: string | null;
    rating: number | null;
    author: Author;
}

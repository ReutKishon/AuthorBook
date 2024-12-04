import { Author } from 'src/authors/entities/author.entity';
export declare class Book {
    id: number;
    title: string;
    publication_year: number;
    genre: string;
    author: Author;
}

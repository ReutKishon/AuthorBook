import { Author } from '../..//authors/entities/author.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  publication_year: number;

  @Column()
  genre: string;
  
  @Column({ nullable: true })
  about: string | null;

  @Column({ nullable: true })
  rating: number | null;

  @ManyToOne(() => Author, (author) => author.books)
  author: Author;
}
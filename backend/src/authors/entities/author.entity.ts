import { Book } from '../../books/entities/book.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  birth_year: number;

  @Column({ nullable: true })
  about: string | null;

  @Column({ nullable: true })
  rating: number | null;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password:"postgres",
      database: 'author_book_system',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthorsModule,
    BooksModule,
  ],
})
export class AppModule {}

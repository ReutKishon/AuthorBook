import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { DataGeneratorModule } from './data-generator/data-generator.module';  // Import DataGeneratorModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password:"9352221",
      database: 'author_book_system',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthorsModule,
    BooksModule,
    DataGeneratorModule
  ],
})
export class AppModule {}
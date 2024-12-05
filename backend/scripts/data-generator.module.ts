import { Module } from '@nestjs/common';
import { DataGeneratorService } from './data-generator.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from '../src/authors/entities/author.entity';
import { Book } from '../src/books/entities/book.entity';
import { AuthorsModule } from '../src/authors/authors.module';
import { BooksModule } from '../src/books/books.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    TypeOrmModule.forFeature([Author, Book]),
      ConfigModule.forRoot({
        envFilePath: '.env',
        isGlobal: true,
      }),
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        autoLoadEntities: true,
        synchronize: true,
      }),
      AuthorsModule,
      BooksModule,
      
  ],
  providers: [DataGeneratorService],
  exports: [DataGeneratorService], // If you want to use this service elsewhere
})
export class DataGeneratorModule {}

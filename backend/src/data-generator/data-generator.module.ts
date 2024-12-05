import { Module } from '@nestjs/common';
import { DataGeneratorService } from './data-generator.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from '../authors/entities/author.entity';
import { Book } from '../books/entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Author, Book])],
  providers: [DataGeneratorService],
  exports: [DataGeneratorService], // If you want to use this service elsewhere
})
export class DataGeneratorModule {}

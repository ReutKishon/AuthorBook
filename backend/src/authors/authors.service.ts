import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private authorsRepository: Repository<Author>,
  ) {}

  async findAll(): Promise<Author[]> {
    return this.authorsRepository.find();
  }

  async findById(id: number): Promise<Author> {
    return this.authorsRepository.findOne({
      where: { id }, // Specify the id in the "where" object
      relations: ['books'], // Specify the relations to be loaded
    });
  }
}

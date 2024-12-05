import { Controller, Get, Param } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { Author } from './entities/author.entity';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Get()
  async findAll(): Promise<Author[]> {
    return this.authorsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Author> {
    return this.authorsService.findById(id);
  }
}
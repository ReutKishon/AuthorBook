import { Repository } from 'typeorm';
import { Author } from './entities/author.entity';
export declare class AuthorsService {
    private authorsRepository;
    constructor(authorsRepository: Repository<Author>);
    findAll(): Promise<Author[]>;
    findById(id: number): Promise<Author>;
}

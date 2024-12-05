"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataGeneratorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const author_entity_1 = require("../authors/entities/author.entity");
const book_entity_1 = require("../books/entities/book.entity");
const faker_1 = require("@faker-js/faker");
let DataGeneratorService = class DataGeneratorService {
    constructor(authorRepository, bookRepository) {
        this.authorRepository = authorRepository;
        this.bookRepository = bookRepository;
    }
    async generateData() {
        for (let i = 0; i < 10; i++) {
            const author = new author_entity_1.Author();
            author.name = faker_1.faker.person.fullName();
            author.birth_year = faker_1.faker.date.past({ years: 60 }).getFullYear();
            author.about = `${author.name} is a bestselling author known for his compelling stories and deep insights into human nature.`;
            author.rating = faker_1.faker.number.int({ min: 1, max: 5 });
            const savedAuthor = await this.authorRepository.save(author);
            for (let j = 0; j < 5; j++) {
                const book = new book_entity_1.Book();
                book.title = faker_1.faker.book.title();
                book.publication_year = faker_1.faker.date.past({ years: 30 }).getFullYear();
                book.genre = faker_1.faker.book.genre();
                book.rating = faker_1.faker.number.int({ min: 1, max: 5 });
                book.author = savedAuthor;
                book.about =
                    'explores themes such as identity, conflict, personal growth, and the complexity of human nature, while also examining morality, societal influences, and the struggle for meaning in an ever-changing world.';
                await this.bookRepository.save(book);
            }
        }
        console.log('Data generation complete!');
    }
};
exports.DataGeneratorService = DataGeneratorService;
exports.DataGeneratorService = DataGeneratorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(author_entity_1.Author)),
    __param(1, (0, typeorm_1.InjectRepository)(book_entity_1.Book)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], DataGeneratorService);
//# sourceMappingURL=data-generator.service.js.map
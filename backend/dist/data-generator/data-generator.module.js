"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataGeneratorModule = void 0;
const common_1 = require("@nestjs/common");
const data_generator_service_1 = require("./data-generator.service");
const typeorm_1 = require("@nestjs/typeorm");
const author_entity_1 = require("../authors/entities/author.entity");
const book_entity_1 = require("../books/entities/book.entity");
let DataGeneratorModule = class DataGeneratorModule {
};
exports.DataGeneratorModule = DataGeneratorModule;
exports.DataGeneratorModule = DataGeneratorModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([author_entity_1.Author, book_entity_1.Book])],
        providers: [data_generator_service_1.DataGeneratorService],
        exports: [data_generator_service_1.DataGeneratorService],
    })
], DataGeneratorModule);
//# sourceMappingURL=data-generator.module.js.map
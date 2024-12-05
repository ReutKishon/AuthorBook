"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("../app.module");
const data_generator_service_1 = require("../data-generator/data-generator.service");
async function generateData() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const dataGeneratorService = app.get(data_generator_service_1.DataGeneratorService);
    await dataGeneratorService.generateData();
    await app.close();
    console.log('Data generation complete!');
}
generateData().catch((error) => {
    console.error('Error generating data:', error);
    process.exit(1);
});
//# sourceMappingURL=data-generator.js.map
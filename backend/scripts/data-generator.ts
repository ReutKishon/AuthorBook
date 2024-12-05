import { NestFactory } from '@nestjs/core';

import { DataGeneratorService } from './data-generator.service';
import { DataGeneratorModule } from './data-generator.module';

async function generateData() {
  // Create NestJS application context
  const app = await NestFactory.create(DataGeneratorModule);

  // Get the DataGeneratorService from the app container
  const dataGeneratorService = app.get(DataGeneratorService);

  // Call the method to generate data
  await dataGeneratorService.generateData();

  // Close the app once data generation is complete
  await app.close();

  console.log('Data generation complete!');
}

// Run the data generation
generateData()
.catch((error) => {
  console.error('Error generating data:', error);
  process.exit(1); // Exit the process with an error code
});

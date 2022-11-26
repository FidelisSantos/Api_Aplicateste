import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from './validation/validation.pipe';
import { HttpExceptionFilter } from './filters/http-exepition';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();

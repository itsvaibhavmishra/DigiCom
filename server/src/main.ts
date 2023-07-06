import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformationInterceptor } from './responseIntercepter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new TransformationInterceptor());
  await app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on PORT: ${process.env.PORT || 5000}`);
  });
}
bootstrap();

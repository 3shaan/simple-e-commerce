import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TrpcRoute } from './trpc/trpc.route';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const trpcRoute = app.get(TrpcRoute);
  await trpcRoute.applyMiddleware(app);
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();

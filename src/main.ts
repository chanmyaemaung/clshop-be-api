import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  app.getHttpAdapter().getInstance().disable("x-powered-by");
  await app.listen(8000);
}
bootstrap();

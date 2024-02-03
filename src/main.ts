import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Disable the X-Powered-By header
  app.getHttpAdapter().getInstance().disable("x-powered-by");

  // Prefix all routes with /api
  app.setGlobalPrefix("api");

  // Get the port from the configuration
  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.getOrThrow("PORT");
  await app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}
bootstrap();

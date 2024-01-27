import { ValidationPipeOptions } from "@nestjs/common";

export const VALIDATION_PIPES_OPTIONS: ValidationPipeOptions = {
  whitelist: true,
  forbidNonWhitelisted: true,
  transform: true,
  transformOptions: {
    enableImplicitConversion: true
  }
};

import { ValidationPipeOptions } from "@nestjs/common";

export const VALIDATION_PIPE_OPTIONS: ValidationPipeOptions = {
  whitelist: true,
  forbidNonWhitelisted: true,
  transform: true,
  transformOptions: {
    enableImplicitConversion: true,
  },
};

export const DEFAULT_PAGESIZE = {
  USER: 10,
  ORDER: 5,
} as const satisfies Record<string, number>;

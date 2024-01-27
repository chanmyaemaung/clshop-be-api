import { Module, ValidationPipe } from "@nestjs/common";
import { APP_PIPE } from "@nestjs/core";
import { VALIDATION_PIPES_OPTIONS } from "./util";

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe(VALIDATION_PIPES_OPTIONS)
    }
  ]
})
export class CommonModule {}

import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ENV_VALIDATION_SCHEMA } from "src/common";

@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
      validationSchema: ENV_VALIDATION_SCHEMA,
    }),
  ],
})
export class EnvModule {}

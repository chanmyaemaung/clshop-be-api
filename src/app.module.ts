import { Module } from "@nestjs/common";
import { DatabaseModule } from "database";
import { EnvModule } from "env";
import { CommonModule } from "./common/common.module";
import { UsersModule } from "./domain/users/users.module";

@Module({
  imports: [UsersModule, CommonModule, DatabaseModule, EnvModule]
})
export class AppModule {}

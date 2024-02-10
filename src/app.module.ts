import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { CommonModule } from "./common/common.module";
import { DatabaseModule } from "./database";
import { OrdersModule } from "./domain/orders/orders.module";
import { UsersModule } from "./domain/users/users.module";
import { EnvModule } from "./env";

@Module({
  imports: [
    UsersModule,
    CommonModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    EnvModule,
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import databaseConfig from "./config/database.config";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forFeature(databaseConfig)],
      inject: [databaseConfig.KEY],
      useFactory: (
        databaseConfiguration: ReturnType<typeof databaseConfig>,
      ) => ({
        type: "postgres",
        url: databaseConfiguration.url,
        autoLoadEntities: true,
      }),
    }),
  ],
})
export class DatabaseModule {}

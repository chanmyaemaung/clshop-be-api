import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateOrder1707588464006 implements MigrationInterface {
  name = "CreateOrder1707588464006";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TYPE "public"."orders_status_enum" AS ENUM(
                'AWAITING_PAYMENT',
                'AWAITING_SHIPMENT',
                'SHIPPED',
                'IN_TRANSIT',
                'COMPLETED',
                'CANCELLED'
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "orders" (
                "id" SERIAL NOT NULL,
                "status" "public"."orders_status_enum" NOT NULL DEFAULT 'AWAITING_PAYMENT',
                "customerId" integer NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updateDAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            ALTER TABLE "orders"
            ADD CONSTRAINT "FK_e5de51ca888d8b1f5ac25799dd1" FOREIGN KEY ("customerId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "orders" DROP CONSTRAINT "FK_e5de51ca888d8b1f5ac25799dd1"
        `);
    await queryRunner.query(`
            DROP TABLE "orders"
        `);
    await queryRunner.query(`
            DROP TYPE "public"."orders_status_enum"
        `);
  }
}

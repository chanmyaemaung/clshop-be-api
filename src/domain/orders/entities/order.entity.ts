import { RegistryDates } from "src/common/embedded";
import { User } from "src/domain/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderStatus } from "../enums";

@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: OrderStatus,
    default: OrderStatus.AWAITING_PAYMENT,
  })
  status: OrderStatus;

  @Column(() => RegistryDates, { prefix: false })
  registryDates: RegistryDates;

  @ManyToOne(() => User, (customer) => customer.orders, { nullable: false })
  customer: User;
}

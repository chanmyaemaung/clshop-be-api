import { RegistryDates } from "src/common/embedded";
import { Order } from "src/domain/orders/entities/order.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone: string;

  @Column()
  password: string;

  @Column(() => RegistryDates, { prefix: false })
  registryDates: RegistryDates;

  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[];
}

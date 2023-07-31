import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'customer_id',
  })
  id: number;

  @Column({
    nullable: true,
    default: '',
  })
  username: string;

  @Column({
    nullable: true,
    default: '',
    name: 'email_address',
  })
  email: string;
}

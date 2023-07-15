import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  index: number;
  @Column()
  account: string;
  @Column()
  password: string;
  @Column()
  type: string;
  @Column()
  uuid: string;
}

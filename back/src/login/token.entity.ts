import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Token extends BaseEntity {
  @PrimaryGeneratedColumn()
  index: number;
  @Column({ nullable: true })
  access: string;
  @Column({ nullable: true })
  refresh: string;
  @Column()
  account: string;
  @Column()
  type: string;
}

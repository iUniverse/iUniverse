import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { AccountStatus } from "./account.model";

@Entity()
export class Account extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    account : string;

    @Column()
    password : string;

    @Column()
    certified : boolean;
}
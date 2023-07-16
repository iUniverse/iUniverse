import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email : string;

    @Column()
    lastName : string;

    @Column()
    firstName : string;

    @Column()
    nickName : string;

    @Column()
    mobile : string | null;

    @Column()
    mobileCarrier : string | null;
}
import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email : string;

    @Column()
    familyName : string;

    @Column()
    givenName : string;

    @Column()
    nickName : string;
}
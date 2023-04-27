import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class IuniCat{
    @PrimaryGeneratedColumn()
    id : number;

    @Column({length : 50})
    name : string;

    @Column({default : '#020918'})
    leftEye : string;

    @Column({default : '#fff'})
    leftEyeWhite : string;

    @Column({default : '#020918'})
    rightEye : string;

    @Column({default : '#fff'})
    rightEyeWhite : string;

    @Column({default : '#fff'})
    nose : string;

    @Column({default : '#5762ff'})
    body : string;

    @Column({default : '#b7bbff'})
    background : string;

    @CreateDateColumn()
    createDate : Date;

    @Column()
    userId : number;
}
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from '../task/task.entity';

@Entity()
export class Theme{
    @PrimaryGeneratedColumn()
    id : number;
    //테마 명
    @Column()
    name : string;
    //테마 다른이름
    @Column()
    otherName : string;
    //즐겨찾기 배경화면들
    @Column("text", {array : true})
    colors : string[];
    //즐겨찾기 글자 색상 (흰색, 검은색)
    @Column()
    fontColor : string;
    //유저 아이디
    @Column()
    userId : number;
}


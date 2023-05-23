import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from '../task/task.entity';

@Entity()
export class Theme{
    @PrimaryGeneratedColumn()
    id : number;

    //테마 명
    @Column()
    name : string;

    //즐겨찾기 배경화면들
    @Column("text", {array : true})
    favoriteBColors : string[];
  
    //즐겨찾기 글자 색상 (흰색, 검은색)
    @Column()
    fontColor : string;

    //배너 배경색
    @Column()
    bannerBC : string;
    
    //유저 아이디
    @Column()
    userId : number;
}


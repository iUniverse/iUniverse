import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from '../task/task.entity';

@Entity()
export class ProjectTheme{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;
    @Column("text", {array : true})
    favoriteBColors : string[];
    // @Column("string", { array : true})
    // favoriteTColors : string[]
    @Column("text", {array : true})
    favortieBadgeBColors : string[];
    @Column("text", {array : true})
    favoriteBadgeTColors : string[];
    @Column()
    bannerBC : string;
    @Column()
    bannerTColor : string;
    @Column()
    bannerBadgeBColor : string;
    // @Column()
    // bannerBadgeTColor : string
    @Column()
    userId : number;
}


// import { ProjectMember } from "../projectmember/projectmember.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Basetype } from "../basetype/basetype.entity";

@Entity()
export class SubType{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type : 'varchar', length : '255', comment : '이름'})
    name : string;
    
    @Column({type : 'varchar', length : '255', comment : '설명'})
    description : string;

    @Column({ type : 'varchar', length : '30', comment : '색상코드'})
    color : string;

    @Column({type : 'varchar', length : '30', comment : '폰트색상'})
    fontColor : string;
    
    @CreateDateColumn({name : 'create_date', 'comment' : '생성날짜'})
    createDate : Date;

    @Column()
    baseTypeId : number;

    @Column()
    orderNum : number;

    @ManyToOne(() => Basetype, (baseType) => baseType.subtypes)
    @JoinColumn()
    baseType : Basetype;

    // @OneToMany(type => ProjectMember, projectMember => projectMember.subType)
    // projectMembers : ProjectMember[];
}

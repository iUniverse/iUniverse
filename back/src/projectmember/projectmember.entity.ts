// import { Project } from "../project/project.entity";
// import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
// import { SubType } from "../subtype/subtype.entity";

// @Entity()
// export class ProjectMember{
//     @PrimaryGeneratedColumn()
//     id : number;

//     @Column()
//     createDate : Date;

//     @Column({ default : true})
//     isInvite : boolean;

//     @Column({ default : Date.now})
//     inviteDate : Date;
    
//     @Column({ default : false })
//     isParticipate : boolean;

//     @CreateDateColumn({name : 'create_date', 'comment' : '생성날짜'})
//     participateDate : Date;

//     @Column()
//     expireDate : Date;

//     @Column()
//     userId : number;

//     // @Column()
//     // roleId : number;

//     @ManyToOne(type => SubType, subtype => subtype.projectMembers)
//     @JoinColumn()
//     subType : SubType[];
    
//     // @Column()
//     // projectId : number;

//     @ManyToOne(type => Project, project => project.projectMembers)
//     @JoinColumn()
//     project : Project[];
// }
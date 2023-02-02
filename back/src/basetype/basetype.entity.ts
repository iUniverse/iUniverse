// import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
// import { SubType } from '../subtype/subtype.entity';

// @Entity()
// export class BaseType{
//     @PrimaryGeneratedColumn()
//     id: number;

//     @Column()
//     name : string;
    
//     @Column()
//     description : string;

//     @Column()
//     color : string;

//     @Column()
//     createDate : Date;

//     @OneToMany(() => SubType, (subtype) => subtype.baseType)
//     subtypes : SubType[];
// } 
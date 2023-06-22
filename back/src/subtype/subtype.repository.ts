import { CustomRepository } from "src/typeorm-ex.decorator";
import { Subtype } from "./subtype.entity";
import { Repository } from "typeorm";
import { SubtypeInit } from "./dto/create-subtype.dto";
import { CreateSubtype } from "./outbound-port/create-subtype.outbound-port";

@CustomRepository(Subtype)
export class SubtypeRepository extends Repository<Subtype>{
    async loadSubtype(param : number) : Promise<Subtype[]>{
        try{
            const result = await this.find({
                where : {
                    basetypeId : param
                },
                order:{
                    orderNum : "ASC"
                }
            });
            return result === null ? [] : result;
        }
        catch(e){
            throw e;
        }
    }
    async CreateSubtype(data : CreateSubtype) : Promise<Subtype>{
        try{
            return await this.save(data);
        }  
        catch(e) {
            throw(e);
        }
    }
    
    async CreateSubtypeInit(data : SubtypeInit) : Promise<Subtype>{
        try{
            return await this.save(data);
        }
        catch(e) {
            throw(e);
        }
    }
}
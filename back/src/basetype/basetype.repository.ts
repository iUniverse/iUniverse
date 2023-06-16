import { CustomRepository } from "src/typeorm-ex.decorator";
import { Repository } from "typeorm";
import { Basetype } from "./basetype.entity";
import { BasetypeInit } from "./dto/create-basetype.dto";
import { CheckInit,  ReturnCheckInit} from "./dto/find-basetype.dto";


@CustomRepository(Basetype)
export class BasetypeRepository extends Repository<Basetype>{
    async Create(data : BasetypeInit) : Promise<Basetype>{
        return await this.save(data);
    }

    async findCheckInit(data : any) : Promise<ReturnCheckInit>{
        try{
            console.log(data);
            const result = await this.findOne({
                where : {
                    projectId : data.projectId,
                    name : data.name
                }
            });

            if(result === null)
                return { 'name' : data.name, 'result' : false }
            else 
                return { 'name' : data.name, 'result' : true}
        }
        catch(e){
            throw e;
        }
    }
}
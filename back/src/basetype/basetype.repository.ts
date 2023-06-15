import { CustomRepository } from "src/typeorm-ex.decorator";
import { Repository } from "typeorm";
import { Basetype } from "./basetype.entity";
import { BasetypeInit } from "./dto/create-basetype.dto";
import { CheckInit } from "./inbound-port/find-basetype.inbound-port";

@CustomRepository(Basetype)
export class BasetypeRepository extends Repository<Basetype>{
    async Create(data : BasetypeInit) : Promise<Basetype>{
        return await this.save(data);
    }

    async CheckInit(data : CheckInit) : Promise<boolean>{
        try{
            const result = await this.findOne({
                where : {
                    projectId : data.projectId,
                    name : data.name
                }
            });

            if(result === null)
                return false;
            else 
                return true;
        }
        catch(e){
            throw e;
        }
    }
}
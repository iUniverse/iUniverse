import { CustomRepository } from "src/typeorm-ex.decorator";
import { Subtype } from "./subtype.entity";
import { Repository } from "typeorm";
import { SubtypeInit } from "./dto/create-subtype.dto";

@CustomRepository(Subtype)
export class SubtypeRepository extends Repository<Subtype>{
    async CreateSubtype(data : SubtypeInit) : Promise<Subtype>{
        try{
            return await this.save(data);
        }
        catch(e) {
            throw(e);
        }
    }
}
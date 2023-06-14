import { CustomRepository } from "src/typeorm-ex.decorator";
import { Repository } from "typeorm";
import { Basetype } from "./basetype.entity";
import { BasetypeInit } from "./dto/create-basetype.dto";

@CustomRepository(Basetype)
export class BasetypeRepository extends Repository<Basetype>{
    async Create(data : BasetypeInit) : Promise<Basetype>{
        return await this.save(data);
    }
}
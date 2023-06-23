import { Injectable } from "@nestjs/common";
import { RemoveSubtypeOutboundPort, RemoveSubtypeResult } from "../outbound-port/delete-subtype.outbound-port";
import { SubtypeRepository } from "../subtype.repository";

@Injectable()
export class RemoveSubtypeRepository implements RemoveSubtypeOutboundPort{
    constructor(
        private readonly removeSubtypeRepo : SubtypeRepository
    ){}

    async remove(param : number) : Promise<RemoveSubtypeResult>{
        const result = await this.removeSubtypeRepo.RemoveSubtype(param);
        return { "result" : result};
    }
}
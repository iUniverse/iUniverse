import { Inject } from "@nestjs/common";
import { RemoveProjectInboundPort, RemoveProjectInboundPortInputDto, RemoveProjectInboundPortOutputDto } from "../inbound-port/remove-projects.inbound-port";
import { RemoveProjectOutboundPort, REMOVE_PROJECT_OUTBOUND_PORT } from "../outbound-port/remove-projects.outbound-port";

export class RemoveProjectService implements RemoveProjectInboundPort{
    constructor(
        @Inject(REMOVE_PROJECT_OUTBOUND_PORT)
        private readonly removeProjectOutboundPort : RemoveProjectOutboundPort
    ){}

    async remove(param : RemoveProjectInboundPortInputDto) : Promise<RemoveProjectInboundPortOutputDto>{
        return this.removeProjectOutboundPort.remove(param);
    }
}
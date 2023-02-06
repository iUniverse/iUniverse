import { Inject } from "@nestjs/common";
import { FindProjectInboundPort, FindProjectInboundPortInputDto, FindProjectInboundPortOutputDto } from "../inbound-port/find-projects.inbound-port";
import { FindProjectOutboundPort, FIND_PROJECT_OUTBOUND_PORT } from "../outbound-port/find-projects.outbound-ports";

export class FindProjectService implements FindProjectInboundPort{
    constructor(
        @Inject(FIND_PROJECT_OUTBOUND_PORT)
        private readonly findProjectOutboundPort : FindProjectOutboundPort
    ){}

    async find(param : FindProjectInboundPortInputDto) : Promise<FindProjectInboundPortOutputDto> {
        return this.findProjectOutboundPort.find(param);
    }
}
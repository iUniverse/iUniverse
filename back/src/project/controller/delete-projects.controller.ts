import { Controller, Delete, Inject, Param } from "@nestjs/common";
import { RemoveProjectInboundPort, RemoveProjectInboundPortInputDto, RemoveProjectInboundPortOutputDto, REMOVE_PROJECT_INBOUND_PORT } from "../inbound-port/remove-projects.inbound-port";

@Controller('iuni_project')
export class DeleteProjectController {
    constructor(
        @Inject(REMOVE_PROJECT_INBOUND_PORT)
        private readonly removeProjectInboundPort : RemoveProjectInboundPort
    ){}

    @Delete('/:id')
    async remove(@Param() param : RemoveProjectInboundPortInputDto) : Promise<RemoveProjectInboundPortOutputDto>{
        return this.removeProjectInboundPort.remove(param);
    }
}
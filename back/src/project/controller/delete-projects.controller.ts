import { Controller, Delete, Inject, Param } from "@nestjs/common";
import { RemoveProjectInboundPort, RemoveProjectInputDto, RemoveProjectOutputDto, REMOVE_PROJECT_INBOUND_PORT } from "../inbound-port/remove-projects.inbound-port";

@Controller('iuni_project')
export class DeleteProjectController {
    constructor(
        @Inject(REMOVE_PROJECT_INBOUND_PORT)
        private readonly removeProjectInboundPort : RemoveProjectInboundPort
    ){}

    @Delete('/:id')
    async remove(@Param() param : RemoveProjectInputDto) : Promise<RemoveProjectOutputDto>{
        return this.removeProjectInboundPort.remove(param);
    }
}
import { Injectable } from "@nestjs/common";
import { FindProjectOutboundPort, FindProjectOutboundPortInputDto, FindProjectOutboundPortOutputDto } from "../outbound-port/find-projects.outbound-ports";
import { ProjectRepository } from "../project.repository";

@Injectable()
export class FindProjectRepository implements FindProjectOutboundPort{
    constructor(
        private readonly findProjectRepo : ProjectRepository
    ){}

    async find(param : FindProjectOutboundPortInputDto) : Promise<FindProjectOutboundPortOutputDto> {
        return await this.findProjectRepo.FindProject(param);
    } 
}
import {
    FindMembersInboundPort,
    FindMembersInboundPortInputDto,
    FindMembersInboundPortOutputDto,
} from '../inbound-port/insert-user.inbound-port';
import { Inject } from '@nestjs/common';
import {
    FIND_MEMBERS_OUTBOUND_PORT,
    FindMembersOutboundPort,
} from '../outbound-port/insert-login.outbound-port';

export class FindMembersService implements FindMembersInboundPort {
    constructor(
        @Inject(FIND_MEMBERS_OUTBOUND_PORT)
        private readonly findMembersOutboundPort: FindMembersOutboundPort,
    ) {}

    async execute(
        params: FindMembersInboundPortInputDto,
    ): Promise<FindMembersInboundPortOutputDto> {
        return this.findMembersOutboundPort.execute();
    }
}
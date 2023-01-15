import {
    FindMembersOutboundPort,
    FindMembersOutboundPortInputDto,
    FindMembersOutboundPortOutputDto,
} from '../outbound-port/insert-login.outbound-port';
import { LoginDataBase } from '../../temp-database/login.database';

export class FindMembersRepository implements FindMembersOutboundPort {
    async execute(
        params: FindMembersOutboundPortInputDto,
    ): Promise<FindMembersOutboundPortOutputDto> {
        const logins = await LoginDataBase.findLogin();

        return logins.map((login) => {
            return {
                id: login.id,
                email: login.email,
                password: login.password
            };
        });
    }
}
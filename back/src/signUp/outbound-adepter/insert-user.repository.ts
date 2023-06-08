import {
    CreateUserOutboundPort,
    CreateUserOutboundPortInputDto,
    SignUpOutboundPortOutputDto
  } from '../outbound-port/insert-user.outbound-port';
  import { Injectable } from '@nestjs/common';
  import { UserRepository } from '../user.repository';
  
  
  @Injectable()
  export class CreateUserRepository implements CreateUserOutboundPort {
    constructor(
     private readonly userRepository : UserRepository
    )
    {}
    async createUser(
      params: CreateUserOutboundPortInputDto,
    ): Promise<SignUpOutboundPortOutputDto> {
      const result = await this.userRepository.CreateUser(params);
      return result;
    }
  }
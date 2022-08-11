import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersEntity } from "./users.entity";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
    
    constructor(
        @InjectRepository(UsersRepository)
        private readonly usersRepository: UsersRepository
    ){}

    public async findUserByUsername (username: string): Promise<UsersEntity> {
        const user = await this.usersRepository.findUserByUsername(username)
        if (!user) throw new NotFoundException('user not found')
        return user
    }

}
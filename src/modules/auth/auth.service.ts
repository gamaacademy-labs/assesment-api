import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthDto } from './auth.dto';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService
    ) { }

    public async login(payload: AuthDto): Promise<string> {
        const auth = await this.usersService.findUserByUsername(payload.username)
        return JSON.stringify(auth)
    }
}




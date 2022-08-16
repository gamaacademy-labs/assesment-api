import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './auth.dto';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtTokenService: JwtService
    ) { }

    async validateUserCredentials(username: string): Promise<any> {
        const user = await this.usersService.findUserByUsername(username);

        if(user && user.username === username) {
        const {username, ...result} = user;
        return result;
        }
        return null;
    }

    async loginWithCredentials(user: any) {
        const payload = { username: user.username, sub: user.id };

        return {
            access_token: this.jwtTokenService.sign(payload),
        };
    }

    public async login(payload: AuthDto): Promise<string> {
        const auth = await this.usersService.findUserByUsername(payload.username)
        return JSON.stringify(auth)
    }
}




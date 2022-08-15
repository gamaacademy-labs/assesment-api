import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){}

    @Post('/login')
    @ApiBody({type: AuthDto})
    public async login(@Body() payload: AuthDto): Promise<string> {
    const auth = await this.authService.login(payload)
    return auth
    }
}

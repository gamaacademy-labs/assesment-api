import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth, ApiParam, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/strategy/jwt-auth.guard";
import { UsersEntity } from "./users.entity";
import { UsersService } from "./users.service";

@Controller('users')
@ApiTags('users')
export class UsersController {

    constructor(
        private usersService: UsersService
    ){}

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get('/:username')
    @ApiParam({ name: 'username' })
    public async findUserByUsername(
        @Param('username') username: string
    ): Promise<UsersEntity> {
        const user = await this.usersService.findUserByUsername(username)
        return user
    }

}
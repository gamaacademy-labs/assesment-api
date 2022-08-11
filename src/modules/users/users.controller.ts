import { Controller, Get, Param } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { UsersEntity } from "./users.entity";
import { UsersService } from "./users.service";

@Controller('users')
@ApiTags('users')
export class UsersController {

    constructor(
        private usersService: UsersService
    ){}

    @Get('/:username')
    @ApiParam({ name: 'username' })
    public async findUserByUsername(
        @Param('username') username: string
    ): Promise<UsersEntity> {
        const user = await this.usersService.findUserByUsername(username)
        return user
    }

}
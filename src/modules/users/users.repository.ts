import { EntityRepository, Repository } from "typeorm";
import { UsersEntity } from "./users.entity";

@EntityRepository(UsersEntity)
export class UsersRepository extends Repository<UsersEntity> {

    public async findUserByUsername (username: string): Promise<UsersEntity> {
        const user = await this.findOne({
            where: {
                username
            }
        })
        return user
    }

}
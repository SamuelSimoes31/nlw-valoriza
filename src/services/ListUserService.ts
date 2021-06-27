import { getCustomRepository } from "typeorm";
import { UsersRepositories } from '../repositories/UserRepositories';

class ListUserService {
  async execute() {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const users = await usersRepositories.find({
      where: {
        admin: false
      }
    });

    return users;
  }

}

export { ListUserService };
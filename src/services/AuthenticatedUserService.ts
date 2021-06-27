import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UserRepositories';

import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticatedUserService {
  async execute({email, password}: IAuthenticateRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    const user = await usersRepository.findOne({
      email
    })

    if(!user) {
      throw new Error("Email/Password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    const token = sign({
      email: user.email
    }, "9a2d80a57a30bec63d69c0243233364b", { //TODO colocar numa variável de ambiente
      subject: user.id,
      expiresIn: "1d" //1 day
    });

    return token;
  }
}

export { AuthenticatedUserService };
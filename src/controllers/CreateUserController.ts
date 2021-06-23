import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserServices';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, admin } = request.body;

    const createUsersService = new CreateUserService();

    const user = await createUsersService.execute({name, email, admin});

    return response.json(user);
  }
}
import {Request, Response} from "express";
import { ListSentComplimentsService } from '../services/ListSentComplimentsService';

class ListUserSentComplimentsController {
  async handle(request: Request, response: Response) {

    const { user_id } = request;

    const listUserSentComplimentsService = new ListSentComplimentsService();

    const compliments = await listUserSentComplimentsService.execute(user_id);

    return response.json(compliments);
  }
}

export { ListUserSentComplimentsController }
import { Request, Response } from 'express';
import { CreateComplimentsService } from '../services/CreateCompliments';


class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const {
        tag_id,
        user_receiver,
        user_sender,
        message
    } = request.body;
    const createComplimentsService = new CreateComplimentsService();

    const compliment = await createComplimentsService.execute({
      tag_id,
      user_receiver,
      user_sender,
      message
  })

    return response.json(compliment);
  }
}

export { CreateComplimentController }
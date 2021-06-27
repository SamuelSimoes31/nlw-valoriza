import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UserRepositories'
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';

interface ICreateComplimentsService {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentsService {
  async execute( {tag_id, message, user_receiver, user_sender }: ICreateComplimentsService ) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const userRepositories = getCustomRepository(UsersRepositories);

    const userReceiverExists = await userRepositories.findOne(user_receiver) // ele vai usar o ID

    if(user_receiver === user_sender) {
      throw new Error("Incorrect User Receiver");
    }

    if(!userReceiverExists) {
      throw new Error("User Receiver does not exists");
    }

    const compliment = complimentsRepositories.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    })

    await complimentsRepositories.save(compliment);

    return compliment;
  }
}

export {CreateComplimentsService}
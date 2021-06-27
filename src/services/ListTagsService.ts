import { getCustomRepository } from "typeorm"
import { TagsRepositores } from '../repositories/TagsRepositores';



class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositores);

    let tags = await tagsRepositories.find();

    //Inserir # antes de todas as tags na hora de listar
    tags = tags.map((tag) => ({...tag, nameCustom: `#${tag.name}`}));

    return tags;
  }
}

export { ListTagsService }
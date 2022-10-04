import { ICreateRecipe } from "../../repositories/ICreateRecipe";

interface CreateRecipeDTO {
  title: string;
  description: string;
  serving_size: number;
  preparation_time: string;
}

export class CreateRecipeService {
  constructor(private recipeRepository: ICreateRecipe) {}

  async execute({
    title,
    description,
    serving_size,
    preparation_time,
  }: CreateRecipeDTO) {
    return await this.recipeRepository.saveRecipe({
      title,
      description,
      serving_size,
      preparation_time,
    });
  }
}

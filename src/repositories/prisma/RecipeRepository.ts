import { PrismaClient } from "@prisma/client";
import { Recipe } from "../../entities/Recipe";
import { ICreateRecipe } from "./../ICreateRecipe";

export class RecipeRepository implements ICreateRecipe {
  constructor(private prisma: PrismaClient) {}

  async saveRecipe(recipe: Recipe): Promise<void> {
    const recipeModel = await this.prisma.recipe.create({
      data: {
        title: recipe.title,
        description: recipe.description,
        serving_size: recipe.serving_size,
        preparation_time: recipe.preparation_time,
      },
    });
    console.log(recipeModel);
  }
}

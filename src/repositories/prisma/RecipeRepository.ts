import { PrismaClient } from "@prisma/client";
import { Recipe } from "../../entities/Recipe";
import { ICreateRecipe } from "./../ICreateRecipe";

export class RecipeRepository implements ICreateRecipe {
  constructor(private prisma: PrismaClient) {
    this.prisma = new PrismaClient();
  }

  async saveRecipe(recipe: Recipe): Promise<void> {
    // await this.prisma.recipe.create({
    //   data: {
    //     title: recipe.title
    //   }
    // })
  }
}

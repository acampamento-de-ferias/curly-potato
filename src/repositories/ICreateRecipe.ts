import { Recipe } from "./../entities/Recipe";

export interface ICreateRecipe {
  saveRecipe: (recipe: Recipe) => Promise<void>;
}

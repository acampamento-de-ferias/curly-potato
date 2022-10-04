import { PrismaClient } from "@prisma/client";
import { RecipeRepository } from "./../../repositories/prisma/RecipeRepository";
import { CreateRecipeController } from "./CreateRecipeController";
import { CreateRecipeService } from "./CreateRecipeService";

const prisma = new PrismaClient();
const recipeRepository = new RecipeRepository(prisma);
const createRecipeService = new CreateRecipeService(recipeRepository);
const createRecipeController = new CreateRecipeController(createRecipeService);

export { createRecipeService, createRecipeController };

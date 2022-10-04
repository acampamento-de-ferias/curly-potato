import { createRecipeController } from "./../useCases/CreateRecipe";
import { Request, Response, Router } from "express";

const routes = Router();

routes.post("/recipe", (request: Request, response: Response) => {
  createRecipeController.handle(request, response);
});

export default routes;

import { CreateRecipeService } from "./CreateRecipeService";
import { Request, Response } from "express";

export class CreateRecipeController {
  constructor(private createRecipeService: CreateRecipeService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      await this.createRecipeService.execute({
        title: request.body.title,
        description: request.body.description,
        serving_size: request.body.serving_size,
        preparation_time: request.body.preparation_time,
      });
      return response.status(201).json({
        message: "Receita cadastrada com sucesso",
      });
    } catch (e: any) {
      return response.status(400).json({
        message: "Ocorreu um erro: " + e.message,
      });
    }
  }
}

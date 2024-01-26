import { Request, Response } from "express";

import { CreateCommentUseCase } from "../../application/CreateCommentUseCase";

export class CreateCommentController {
  constructor(readonly createCommentUseCase: CreateCommentUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const comment = await this.createCommentUseCase.run(
        data.content,
        data.author,
      );

      if (comment)
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          data: {
            id: comment?.id,
            content: comment?.content,
            author: comment?.author,
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el comentario",
        });
    } catch (error) {
      //Code HTTP : 204 Sin contenido
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}

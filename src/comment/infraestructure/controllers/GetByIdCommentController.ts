import { Request, Response } from "express";

import { GetByIdCommentUseCase } from "../../application/GetByIdCommentUseCase";

export class GetByIdCommentController {
  constructor(readonly getByIdCommentUseCase: GetByIdCommentUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const comment = await this.getByIdCommentUseCase.run(id);

      if (comment)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: {
            id: comment.id,
            content: comment.content,
            author: comment.author,
          },
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
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

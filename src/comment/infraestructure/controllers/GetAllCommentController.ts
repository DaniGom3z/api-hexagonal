import { Request, Response } from "express";

import { GetAllCommentUseCase } from "../../application/GetAllCommentUseCase";

export class GetAllCommentController {
  constructor(readonly getAllCommentUseCase: GetAllCommentUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const comments = await this.getAllCommentUseCase.run();
      if (comments)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: comments.map((comment: any) => {
            return {
              id: comment.id,
              content: comment.content,
              author: comment.author
            };
          }),
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

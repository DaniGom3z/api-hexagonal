import { Request, Response } from "express";
import { DeleteCommentUseCase } from "../../application/DeleteCommentUseCase";

export class DeleteCommentController {
  constructor(readonly deleteCommentUseCase: DeleteCommentUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    try {
      const deleted = await this.deleteCommentUseCase.run(id);

      if (deleted) {
        // Código HTTP: 200 -> OK
        res.status(200).send({
          status: "success",
          data: {
            message: "Comentario eliminado correctamente",
          },
        });
      } else {
        // Código HTTP: 404 -> No encontrado
        res.status(404).send({
          status: "error",
          data: "El comentario no existe o no pudo ser eliminado",
        });
      }
    } catch (error) {
      // Código HTTP: 500 -> Error interno del servidor
      res.status(500).send({
        status: "error",
        data: "Ocurrió un error durante la eliminación del comentario",
      });
    }
  }
}
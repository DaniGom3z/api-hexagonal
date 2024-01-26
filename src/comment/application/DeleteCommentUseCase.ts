import { CommentRepository } from "../domain/CommentRepository";

export class DeleteCommentUseCase {
  constructor(readonly commentRepository: CommentRepository) {}

  async run(id: number): Promise<boolean> {
    try {
      const existingComment = await this.commentRepository.getById(id);

      if (!existingComment) {
        console.log("Comentario no encontrado");
        return false;
      }

      const deleted = await this.commentRepository.deleteComment(id);
      console.log("Eliminación exitosa:", deleted);

      return deleted;
    } catch (error) {
      console.error("Error al eliminar el comentario:", error);
      return false;
    }
  }
}
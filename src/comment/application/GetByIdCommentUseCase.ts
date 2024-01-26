import { Comment } from "../domain/Comment";
import { CommentRepository } from "../domain/CommentRepository";

export class GetByIdCommentUseCase {
  constructor(readonly commentRepository: CommentRepository) {}

  async run(id: number): Promise<Comment | null> {
    try {
      const result = await this.commentRepository.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}

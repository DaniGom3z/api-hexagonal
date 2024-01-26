import { Comment } from "../domain/Comment";
import { CommentRepository } from "../domain/CommentRepository";

export class GetAllCommentUseCase {
  constructor(readonly productRepository: CommentRepository) {}

  async run(): Promise<Comment[] | null> {
    try {
      const result = await this.productRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}

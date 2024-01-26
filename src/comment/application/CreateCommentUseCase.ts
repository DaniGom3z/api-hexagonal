import { Comment } from "../domain/Comment";
import { CommentRepository } from "../domain/CommentRepository";

export class CreateCommentUseCase {
  constructor(readonly userRepository: CommentRepository) {}

  async run(
    content: string,
    author: string,
  ): Promise<Comment | null> {
    try {
      const comment = await this.userRepository.createComment(
        content,
        author
       );
      return comment;
    } catch (error) {
      return null;
    }
  }
}

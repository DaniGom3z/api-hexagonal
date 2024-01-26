import { Comment } from "./Comment";

export interface CommentRepository {
  getAll(): Promise<Comment[] | null>;
  createComment(content: string, author: string): Promise<Comment | null>;
  getById(commentId: number): Promise<Comment | null>;
  deleteComment(id: number): Promise<boolean>;
}

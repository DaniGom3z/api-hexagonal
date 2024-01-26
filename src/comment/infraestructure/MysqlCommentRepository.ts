import { query } from "../../database/mysql";
import { Comment } from "../domain/Comment";
import { CommentRepository } from "../domain/CommentRepository";

export class MysqlCommentRepository implements CommentRepository {
  async getAll(): Promise<Comment[] | null> {
    const sql = "SELECT * FROM comment";
    try {
      const [data]: any = await query(sql, []);
      const dataComments = Object.values(JSON.parse(JSON.stringify(data)));

      return dataComments.map(
        (comment: any) =>
          new Comment(
            comment.id,
            comment.content,
            comment.author,
          )
      );
    } catch (error) {
      return null;
    }
  }
  async deleteComment(id: number): Promise<boolean> {
    const sql = "DELETE FROM comment WHERE id=?";
    const params: any[] = [id];
  
    try {
      const result: any = await query(sql, params);
  
      if (result && result.affectedRows > 0) {
        return true;
      } else {
        return false; 
      }
      
    } catch (error) {
      console.error("Error al eliminar el comentario:", error);
      throw new Error("Error al eliminar el comentario");
    }
  }
  


  async getById(commentId: number): Promise<Comment | null> {
    const sql = "SELECT * FROM comment WHERE id=?";
    const params: any[] = [commentId];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Comment(
        result[0].id,
        result[0].content,
        result[0].author,
      );
    } catch (error) {
      return null;
    }
  }

  async createComment(
    content: string,
    author: string,
  ): Promise<Comment | null> {
    const sql =
      "INSERT INTO comment (content, author) VALUES (?, ?)";
    const params: any[] = [ content, author];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Comment(result.insertId, content, author);
    } catch (error) {
      return null;
    }
  }
}

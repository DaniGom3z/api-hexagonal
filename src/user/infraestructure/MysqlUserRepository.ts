import { query } from "../../database/mysql";
import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class MysqlUserRepository implements UserRepository {
  
  async getById(userId: number): Promise<User | null> {
    const sql = "SELECT * FROM user WHERE id=?";
    const params: any[] = [userId];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new User(
        result[0].id,
        result[0].name,
        result[0].email,
        result[0].age
      );
    } catch (error) {
      return null;
    }
  }

  async createUser(
    name: string,
    email: string,
    age: number
  ): Promise<User | null> {
    const sql =
      "INSERT INTO user (name, email, age) VALUES (?, ?, ?)";
    const params: any[] = [name, email, age];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new User(result.insertId, name, email, age);
    } catch (error) {
      return null;
    }
  }
}

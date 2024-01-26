import { User } from "./User";

export interface UserRepository {
  getById(userId: number): Promise<User | null>;
  createUser(
    name: string,
    email: string,
    age: number
  ): Promise<User | null>;
}

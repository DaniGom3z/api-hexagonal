import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class CreateUserUseCase {
  constructor(readonly userRepository: UserRepository) {}

  async run(
    name: string,
    email: string,
    age: number
  ): Promise<User | null> {
    try {
      const user = await this.userRepository.createUser(
        name,
        email,
        age
      );
      return user;
    } catch (error) {
      return null;
    }
  }
}

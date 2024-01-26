import { CreateUserUseCase } from "../application/CreateUserUseCase";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetByIdUserUseCase } from "../application/GetByIdUserUseCase";
import { GetByIdUserController } from "./controllers/GetByIdUserController";
import { MysqlUserRepository } from "./MysqlUserRepository";

export const mysqlProductRepository = new MysqlUserRepository();
export const createUserUseCase = new CreateUserUseCase(
  mysqlProductRepository
);
export const getByIdUserUseCase = new GetByIdUserUseCase(
  mysqlProductRepository
);
export const createUserController = new CreateUserController(
  createUserUseCase
);
export const getByIdUserController = new GetByIdUserController(
  getByIdUserUseCase
);

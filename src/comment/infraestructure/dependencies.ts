import { CreateCommentUseCase } from "../application/CreateCommentUseCase";
import { CreateCommentController } from "./controllers/CreateCommentController";
import { GetAllCommentUseCase } from "../application/GetAllCommentUseCase";
import { GetAllCommentController } from "./controllers/GetAllCommentController";
import { GetByIdCommentController } from "./controllers/GetByIdCommentController";
import { GetByIdCommentUseCase } from "../application/GetByIdCommentUseCase";
import { DeleteCommentUseCase } from "../application/DeleteCommentUseCase";
import { DeleteCommentController } from "./controllers/DeleteCommentController";

import { MysqlCommentRepository } from "./MysqlCommentRepository";

export const mysqlProductRepository = new MysqlCommentRepository();
export const createCommentUseCase = new CreateCommentUseCase(
  mysqlProductRepository
);
export const getAllCommentUseCase = new GetAllCommentUseCase(
  mysqlProductRepository
);
export const createCommentController = new CreateCommentController(
  createCommentUseCase
);
export const getAllCommentController = new GetAllCommentController(
  getAllCommentUseCase
);
export const getByIdCommentUseCase = new GetByIdCommentUseCase(
  mysqlProductRepository
);
export const getByIdCommentController = new GetByIdCommentController(
  getByIdCommentUseCase
)
export const deleteCommentUseCase = new DeleteCommentUseCase(
  mysqlProductRepository
);
export const deleteCommentController = new DeleteCommentController(
  deleteCommentUseCase
);

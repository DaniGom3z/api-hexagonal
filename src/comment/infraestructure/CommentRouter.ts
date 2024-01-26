import express from "express";

import {createCommentController} from "./dependencies";
import {deleteCommentController} from "./dependencies";
import {getAllCommentController} from "./dependencies";
import {getByIdCommentController  } from "./dependencies";


export const commentRouter = express.Router();

commentRouter.get("/",getAllCommentController.run.bind(getAllCommentController));
commentRouter.post("/",createCommentController.run.bind(createCommentController));
commentRouter.get("/:id",getByIdCommentController.run.bind(getByIdCommentController));
commentRouter.delete("/:id",deleteCommentController.run.bind(deleteCommentController));
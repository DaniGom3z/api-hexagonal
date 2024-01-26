import express from 'express';

import {createUserController} from "./dependencies"
import {getByIdUserController} from "./dependencies"

export const userRouter = express.Router();

userRouter.post("/",createUserController.run.bind(createUserController));
userRouter.get("/:id",getByIdUserController.run.bind(getByIdUserController));
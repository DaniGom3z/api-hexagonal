import express from "express";
import { Signale } from "signale";

import { userRouter } from "./src/user/infraestructure/UserRouter";
import { commentRouter } from "./src/comment/infraestructure/CommentRouter";

const app = express();

const signale = new Signale();

app.use(express.json());
app.use("/users", userRouter);
app.use("/comments", commentRouter);

app.listen(4000, () => {
  signale.success("Server online in port 4000");
});

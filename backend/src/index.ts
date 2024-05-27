import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";
import { connectToDB } from "./core/config/db_conection";
import userRouter from "./domains/user/router";
import { isAuth } from "./domains/auth/middlewaree/AuthMiddleWare";
import authRouter from "./domains/auth/routers/auth";
import jwt from "jsonwebtoken";
import type { MUser } from "./domains/user/model";

const app = express();
const PORT = 3001;

function myMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  return res.status(500).json({ message: err.message });
}

app.use(express.json());
app.use(morgan("dev"));
app.use("/auth", authRouter);
app.use(isAuth);
app.use("/api", userRouter);
app.use(myMiddleware);

app.listen(PORT, async () => {
  await connectToDB();
  console.log(`Running on Port ${PORT}`);
});

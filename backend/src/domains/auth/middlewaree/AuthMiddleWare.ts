import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";
import jwt from "jsonwebtoken";
import type { MUser } from "../../user/model";

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.method === "OPTIONS") {
    next();
    return;
  }
  try {
    const token = req.headers?.authorization?.split(" ")[1];
    if (!token) {
      throw new Error("Пользователь не авторизован");
    }
    const decodedData = jwt.verify(token, "secret") as MUser;
    req.body._currentUser = decodedData;
    console.log(req.body._currentUser);
    next();
  } catch (e) {
    console.log(e);
    return res.status(403).json({ message: "Пользователь не авторизован" });
  }
};

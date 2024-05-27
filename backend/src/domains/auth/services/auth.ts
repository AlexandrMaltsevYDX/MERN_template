import type { Document } from "mongoose";
import { authRepository, type AuthRepository } from "../repositories/auth";
import { type IUser, userRepository } from "../../user/repository";
import jwt from "jsonwebtoken";
import type { MUser } from "../../user/model";
import type express from "express";

function generateAccessToken(
  userId: number,
  userName: string,
  password: string,
) {
  const payload = {
    userId,
    userName,
    password,
  };
  return jwt.sign(payload, "secret", { expiresIn: "24h" });
}

// service
export class AuthService {
  constructor(private repository: AuthRepository) {}

  async login(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    const instance: MUser = req.query as MUser;
    const instances = (await userRepository.getList(
      instance as Record<string, string | number>,
    )) as IUser[];
    
    const token =
      instances[0].userId && instances[0].userName && instances[0].password
        ? generateAccessToken(
            instances[0].userId,
            instances[0].userName,
            instances[0].password,
          )
        : "";
    return res.json({ token });
  }
}

export const authService = new AuthService(authRepository);

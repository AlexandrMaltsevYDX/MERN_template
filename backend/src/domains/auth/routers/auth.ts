import express, { type Router } from "express";
import { authService } from "../services/auth";

const authRouter = express.Router();

// authRouter.post("/registration");
authRouter.post("/login", authService.login);

export default authRouter;

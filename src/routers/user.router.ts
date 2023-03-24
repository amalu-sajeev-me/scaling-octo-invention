import { Router } from "express";
import { UserController } from "../controllers/user.controller";

export const UserRouter = Router();

UserRouter.post("/user", UserController.registerUser);

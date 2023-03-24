import { Router } from "express";
import { UserController } from "../controllers/user.controller";

export const UserRouter = Router();

/**
 * Spec for the route /auth/register.
 *
 * @openapi
 * /user:
 *   post:
 *     summary: Register as user
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Must be unique
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 description: At least one number and one letter
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 *  */

UserRouter.post("/user", UserController.registerUser);

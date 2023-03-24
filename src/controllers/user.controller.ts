import { RequestHandler } from "express";

export class UserController {
  public static registerUser: RequestHandler = (req, res) => {
    res.json({ name: "name" });
  };
}

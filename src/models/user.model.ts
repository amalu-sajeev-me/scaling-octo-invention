import { Schema, model } from "mongoose";
import { IUser } from "../schemas/user.schema";

const schema = new Schema<IUser>(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
  },
  {
    timestamps: {
      createdAt: "_createdAt",
      updatedAt: "_updatedAt",
    },
  }
);

export const UserModel = model("users", schema);

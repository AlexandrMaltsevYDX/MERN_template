import mongoose, { type Document, type Model, type Schema } from "mongoose";
import type { MUser } from "./model";
import { Repository } from "../../core/base/repository";

export type IUser = MUser & Document;

export const UserSchema = new mongoose.Schema({
  userId: { type: Number, require: true, unique: true },
  userName: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

export class UserRepository extends Repository {
  constructor() {
    super(UserSchema, "User");
  }
  // Здесь вы можете добавить специфические для User методы
}

// Создание экземпляра репозитория
export const userRepository = new UserRepository();

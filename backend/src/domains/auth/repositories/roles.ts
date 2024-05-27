import mongoose, { type Document, type Model, type Schema } from "mongoose";
import type { MRole } from "../models/roles";
import { Repository } from "../../../core/base/repository";

export type IRole = MRole & Document;

const RoleSchema = new mongoose.Schema({
  roleId: { type: Number, require: true, unique: true },
  roleName: { type: String, require: true, unique: true },
});

export class RoleRepository extends Repository {
  constructor() {
    super(RoleSchema, "Role");
  }
  // Здесь вы можете добавить специфические для RoleRepository методы
}

// Создание экземпляра репозитория
export const roleRepository = new RoleRepository();

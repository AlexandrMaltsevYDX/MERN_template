import mongoose, { type Document, type Model, type Schema } from "mongoose";
import { MongooseRepository } from "../../../core/orm";
import { UserSchema } from "../../user/repository";

export class AuthRepository {
  repo: MongooseRepository;
  constructor(schema: Schema, entityName: string) {
    this.repo = new MongooseRepository(schema, entityName);
  }

  async registration(item: Document): Promise<Document> {
    return this.repo.createOne(item);
  }

  async login(id: string) {
    return this.repo.getOne(id);
  }
  // Здесь вы можете добавить специфические для User методы
}

export const authRepository = new AuthRepository(UserSchema, "User");

import mongoose, { type Document, type Model, type Schema } from "mongoose";
import { MongooseRepository } from "../orm";

export class Repository {
  repo: MongooseRepository;
  constructor(schema: Schema, entityName: string) {
    this.repo = new MongooseRepository(schema, entityName);
  }

  async createOne(item: Document): Promise<Document> {
    return this.repo.createOne(item);
  }

  async getOne(id: string) {
    return this.repo.getOne(id);
  }

  async getList(attrs: Record<string, string | number>): Promise<Document[]> {
    return this.repo.getList(attrs);
  }
  // Здесь вы можете добавить специфические для User методы
}

import type { Document, Model, Schema } from "mongoose";
import { AbstractRepository } from "./abstract";
import { conn } from "../config/db_conection";

// orm
export class MongooseRepository extends AbstractRepository<Document> {
  MongoModel: Model<Document>;
  constructor(schema: Schema, entityName: string) {
    super();
    this.MongoModel = conn.model<Document>(entityName, schema);
  }
  // todo refactor this
  async createOne(item: Document): Promise<Document> {
    const session = await conn.startSession();
    try {
      session.startTransaction();
      const res = await new this.MongoModel(item).save();
      if (res) await session.commitTransaction();
      return res;
    } catch (error) {
      if (session) await session.abortTransaction();
      throw error;
    } finally {
      if (session) session.endSession();
    }
  }

  async getOne(id: string): Promise<Document | null> {
    return await this.MongoModel.findById(id);
  }

  async getList(attrs: Record<string, string | number>): Promise<Document[]> {
    return await this.MongoModel.find(attrs);
  }
}

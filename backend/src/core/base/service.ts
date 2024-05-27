import type { Document } from "mongoose";
import type { Repository } from "./repository";

// service
export class BaseService<T> {
  constructor(private repository: Repository) {}
  async getList(attrs: T) {
    return this.repository.getList(attrs as Record<string, string | number>);
  }
  async getOne(id: string) {
    return this.repository.getOne(id);
  }
  async createOne(attrs: T) {
    return this.repository.createOne(attrs as T & Document);
  }
}

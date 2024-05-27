// core
export abstract class AbstractRepository<T> {
  abstract createOne(item: T): Promise<T>;
  abstract getOne(id: string): Promise<T | null>;
  abstract getList(attrs: Record<string, string | number>): Promise<T[]>;
}

import express, { type Router } from "express";
import type { BaseService } from "../../core/base/service";
import { isAuth } from "../../domains/auth/middlewaree/AuthMiddleWare";

export class BaseRouter<T> {
  private service: BaseService<T>;
  private router: Router;

  constructor(service: BaseService<T>, entityName: string) {
    this.service = service;
    this.router = express.Router();
    this.router.get(`/${entityName}/:id`, async (req, res, next) =>
      this.getOne(req, res, next),
    );
    this.router.get(`/${entityName}s`, async (req, res, next) =>
      this.getList(req, res, next),
    );
    this.router.post(`/${entityName}`, async (req, res, next) =>
      this.createOne(req, res, next),
    );
  }
  returnRouter() {
    return this.router;
  }
  getOne = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    try {
      // isAuth(req, res, next);
      const id: string = String(req.query.id);
      const instances = await this.service.getOne(id);
      res.json(instances);
    } catch (error) {
      next(error); // Передаем ошибку в обработчик ошибок
    }
  };

  getList = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    try {
      // isAuth(req, res, next);
      const instance: T = req.query as T;
      const instances = await this.service.getList(instance);
      res.json(instances);
    } catch (error) {
      next(error); // Передаем ошибку в обработчик ошибок
    }
  };

  createOne = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    try {
      // isAuth(req, res, next);
      const newInstance = await this.service.createOne(req.body as T);
      res.json(newInstance);
    } catch (error) {
      next(error); // Передаем ошибку в обработчик ошибок
    }
  };
}

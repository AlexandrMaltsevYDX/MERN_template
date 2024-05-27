"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRouter = void 0;
const express_1 = __importDefault(require("express"));
class BaseRouter {
    constructor(service, entityName) {
        this.getOne = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = String(req.query.id);
                const instances = yield this.service.getOne(id);
                res.json(instances);
            }
            catch (error) {
                next(error); // Передаем ошибку в обработчик ошибок
            }
        });
        this.getList = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const instance = req.query;
                const instances = yield this.service.getList(instance);
                res.json(instances);
            }
            catch (error) {
                next(error); // Передаем ошибку в обработчик ошибок
            }
        });
        this.createOne = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const newInstance = yield this.service.createOne(req.body);
                res.json(newInstance);
            }
            catch (error) {
                next(error); // Передаем ошибку в обработчик ошибок
            }
        });
        this.service = service;
        this.router = express_1.default.Router();
        this.router.get(`/${entityName}/:id`, (req, res, next) => __awaiter(this, void 0, void 0, function* () { return this.getOne(req, res, next); }));
        this.router.get(`/${entityName}s`, (req, res, next) => __awaiter(this, void 0, void 0, function* () { return this.getList(req, res, next); }));
        this.router.post(`/${entityName}`, (req, res, next) => __awaiter(this, void 0, void 0, function* () { return this.createOne(req, res, next); }));
    }
    returnRouter() {
        return this.router;
    }
}
exports.BaseRouter = BaseRouter;

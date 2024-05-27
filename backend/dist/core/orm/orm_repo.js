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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseRepository = void 0;
const abstract_1 = require("./abstract");
const db_conection_1 = require("../config/db_conection");
// orm
class MongooseRepository extends abstract_1.AbstractRepository {
    constructor(schema, entityName) {
        super();
        this.MongoModel = db_conection_1.conn.model(entityName, schema);
    }
    // todo refactor this
    createOne(item) {
        return __awaiter(this, void 0, void 0, function* () {
            const session = yield db_conection_1.conn.startSession();
            try {
                session.startTransaction();
                const res = yield new this.MongoModel(item).save();
                if (res)
                    yield session.commitTransaction();
                return res;
            }
            catch (error) {
                if (session)
                    yield session.abortTransaction();
                throw error;
            }
            finally {
                if (session)
                    session.endSession();
            }
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.MongoModel.findById(id);
        });
    }
    getList(attrs) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.MongoModel.find(attrs);
        });
    }
}
exports.MongooseRepository = MongooseRepository;

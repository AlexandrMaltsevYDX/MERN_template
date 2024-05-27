"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleRepository = exports.RoleRepository = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const repository_1 = require("../../../core/base/repository");
const RoleSchema = new mongoose_1.default.Schema({
    roleId: { type: Number, require: true, unique: true },
    roleName: { type: String, require: true, unique: true },
});
class RoleRepository extends repository_1.Repository {
    constructor() {
        super(RoleSchema, "Role");
    }
}
exports.RoleRepository = RoleRepository;
// Создание экземпляра репозитория
exports.roleRepository = new RoleRepository();

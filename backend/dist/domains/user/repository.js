"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = exports.UserRepository = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const repository_1 = require("../../core/base/repository");
const UserSchema = new mongoose_1.default.Schema({
    userId: { type: Number, require: true, unique: true },
    userName: { type: String, require: true, unique: true },
    password: { type: String, require: true },
});
class UserRepository extends repository_1.Repository {
    constructor() {
        super(UserSchema, "User");
    }
}
exports.UserRepository = UserRepository;
// Создание экземпляра репозитория
exports.userRepository = new UserRepository();

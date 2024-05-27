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
exports.AuthService = void 0;
const repository_1 = require("../../user/repository");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function generateAccessToken(userId, userName, password) {
    const payload = {
        userId,
        userName,
        password,
    };
    return jsonwebtoken_1.default.sign(payload, "secret", { expiresIn: "24h" });
}
// service
class AuthService {
    constructor(repository) {
        this.repository = repository;
    }
    login(attrs) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield repository_1.userRepository.getList(attrs);
            return user.userId && user.userName && user.password
                ? generateAccessToken(user.userId, user.userName, user.password)
                : "";
        });
    }
    registration(attrs) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield repository_1.userRepository.getList(attrs);
            if (users)
                throw new Error("Пользователь уже сущетсвует");
            return this.repository.registration(attrs);
        });
    }
}
exports.AuthService = AuthService;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function isAuth(err, req, res, next) {
    var _a, _b;
    if (req.method === "OPTIONS") {
        next();
    }
    try {
        const token = (_b = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(" ")[1];
        if (!token) {
            return res.status(403).json({ message: "Пользователь не авторизован" });
        }
        const decodedData = jsonwebtoken_1.default.verify(token, "secret");
        req.body._currentUser = decodedData;
        next();
    }
    catch (e) {
        console.log(e);
        return res.status(403).json({ message: "Пользователь не авторизован" });
    }
}
exports.isAuth = isAuth;

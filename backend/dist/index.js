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
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const db_conection_1 = require("./core/config/db_conection");
const router_1 = __importDefault(require("./domains/user/router"));
const AuthMiddleWare_1 = require("./domains/auth/middlewaree/AuthMiddleWare");
const app = (0, express_1.default)();
const PORT = 3001;
function myMiddleware(err, req, res, next) {
    console.log(err);
    return res.status(500).json({ message: err.message });
}
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use("/api", router_1.default);
app.use(AuthMiddleWare_1.isAuth);
app.use(myMiddleware);
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, db_conection_1.connectToDB)();
    console.log(`Running on Port ${PORT}`);
}));

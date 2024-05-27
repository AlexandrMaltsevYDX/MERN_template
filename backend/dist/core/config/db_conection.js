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
exports.connectToDB = exports.conn = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.conn = mongoose_1.default.createConnection("mongodb://localhost:27017/re");
// db connection
const connectToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.conn.asPromise();
        console.log("Successfully connected to the database");
    }
    catch (e) {
        console.error("Error connecting to the database", e);
        process.exit(1);
    }
});
exports.connectToDB = connectToDB;

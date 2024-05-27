"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hndUser = void 0;
const handler_1 = require("../core/base/handler");
const model_1 = require("./model");
exports.hndUser = new handler_1.EntityBaseHandler(model_1.UserModel);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service");
const router_1 = require("../../core/base/router");
const userRouter = new router_1.BaseRouter(service_1.userService, "user");
exports.default = userRouter.returnRouter();

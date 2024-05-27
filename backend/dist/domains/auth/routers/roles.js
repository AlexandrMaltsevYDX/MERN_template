"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleRouter = void 0;
const router_1 = require("../../../core/base/router");
const roles_1 = require("../services/roles");
exports.roleRouter = new router_1.BaseRouter(roles_1.roleService, "role");

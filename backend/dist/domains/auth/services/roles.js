"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleService = void 0;
const service_1 = require("../../../core/base/service");
const roles_1 = require("../repositories/roles");
exports.roleService = new service_1.BaseService(roles_1.roleRepository);

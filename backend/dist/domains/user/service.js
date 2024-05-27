"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const service_1 = require("../../core/base/service");
const repository_1 = require("./repository");
exports.userService = new service_1.BaseService(repository_1.userRepository);

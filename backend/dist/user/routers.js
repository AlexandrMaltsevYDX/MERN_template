"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handlers_1 = require("./handlers");
const router_1 = require("../core/base/router");
const router = new router_1.EntityBaseRouter(handlers_1.hndUser);
exports.default = router.router;

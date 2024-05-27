"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const model_1 = require("../core/base/models/fake_models/model");
const INITUSERDATA = [
    { id: 0, name: "User0" },
    { id: 1, name: "User1" },
    { id: 2, name: "User2" },
    { id: 3, name: "User3" },
];
exports.UserModel = new model_1.FakeEntityBaseModel("User", INITUSERDATA);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_ENTITY_ROUTS = void 0;
// ! AFTER CHANGING IT MAKE SHURE YOU CHANGE AbstractEntityBaseHandler and ItfEntityBaseHandler
exports.BASE_ENTITY_ROUTS = {
    get: "/:id?",
    post: "/",
    put: "/:id",
    delete: "/:id"
};

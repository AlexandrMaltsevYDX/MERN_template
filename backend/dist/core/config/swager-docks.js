"use strict";
class BaseEntitySwaggerDocumentation {
    constructor() {
        this.base = {};
        this.paths = {};
    }
    static getInstance() {
        if (!BaseEntitySwaggerDocumentation.instance) {
            BaseEntitySwaggerDocumentation.instance =
                new BaseEntitySwaggerDocumentation();
        }
        return BaseEntitySwaggerDocumentation.instance;
    }
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    addBase(baseSwager) {
        this.base = baseSwager;
    }
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    addPath(path) {
        this.paths = Object.assign(Object.assign({}, this.paths), path);
    }
    getDoc() {
        return Object.assign(Object.assign({}, this.base), { paths: Object.assign({}, this.paths) });
    }
}
// documentation
// const swaggerBase = {
//   openapi: "3.0.0",
//   info: {
//     title: "Template API",
//     description: "Template API specification",
//     version: "0.0.0",
//   },
//   servers: [
//     {
//       url: "http://localhost:3001/api",
//     },
//   ],
// };
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerBase));

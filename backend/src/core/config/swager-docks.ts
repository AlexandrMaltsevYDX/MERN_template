class BaseEntitySwaggerDocumentation {
  base;
  paths;
  private static instance: BaseEntitySwaggerDocumentation;

  private constructor() {
    this.base = {};
    this.paths = {};
  }

  public static getInstance(): BaseEntitySwaggerDocumentation {
    if (!BaseEntitySwaggerDocumentation.instance) {
      BaseEntitySwaggerDocumentation.instance =
        new BaseEntitySwaggerDocumentation();
    }

    return BaseEntitySwaggerDocumentation.instance;
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  addBase(baseSwager: any) {
    this.base = baseSwager;
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  addPath(path: any) {
    this.paths = {
      ...this.paths,
      ...path,
    };
  }

  getDoc() {
    return {
      ...this.base,
      paths: {
        ...this.paths,
      },
    };
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

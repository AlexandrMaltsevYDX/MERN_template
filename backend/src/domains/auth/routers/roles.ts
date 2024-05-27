import { BaseRouter } from "../../../core/base/router";
import type { MRole } from "../models/roles";
import { roleService } from "../services/roles";

export const roleRouter = new BaseRouter<MRole>(roleService, "role");

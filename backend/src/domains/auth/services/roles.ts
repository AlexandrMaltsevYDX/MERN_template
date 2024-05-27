import { BaseService } from "../../../core/base/service";
import type { MRole } from "../models/roles";
import { roleRepository } from "../repositories/roles";

export const roleService = new BaseService<MRole>(roleRepository);

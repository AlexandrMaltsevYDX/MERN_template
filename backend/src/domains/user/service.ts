import { BaseService } from "../../core/base/service";
import type { MUser } from "./model";
import { userRepository } from "./repository";

export const userService = new BaseService<MUser>(userRepository);

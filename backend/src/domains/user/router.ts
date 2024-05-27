import type { MUser } from "./model";
import { userService } from "./service";
import { BaseRouter } from "../../core/base/router";

const userRouter = new BaseRouter<MUser>(userService, "user");

export default userRouter.returnRouter();

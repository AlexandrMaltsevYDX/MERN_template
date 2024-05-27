import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../../../../00_app/appComponent/App";
import TableTest from "./users.page";

export const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/users",
  component: TableTest,
});

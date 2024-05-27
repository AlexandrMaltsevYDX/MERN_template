import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../../../../00_app/appComponent/App";

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: function About() {
    return <div className="p-2">About!</div>;
  },
});

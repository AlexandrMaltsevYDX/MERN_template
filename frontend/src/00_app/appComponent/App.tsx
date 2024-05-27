import { ThemeProvider } from "../providers/ThemeProvider";
import "./App.css";
import { DashboardLayout } from "../../03_view/02_components/layouts/adminDashboard";
import {
  Outlet,
  RouterProvider,
  createRouter,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { indexRoute } from "../../03_view/01_pages/administration/home/index.route";
import { aboutRoute } from "../../03_view/01_pages/administration/about/about.route";
import { usersRoute } from "../../03_view/01_pages/administration/users/users.route";

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
      <TanStackRouterDevtools />
    </>
  ),
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, usersRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;

import Billing from "../pages/private/Billing";
import Dashboard from "../pages/private/Dashboard";
import Report from "../pages/private/Report";

const privateRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/billing",
    component: Billing,
  },
  {
    path: "/reports",
    component: Report,
  },
];

export { privateRoutes };

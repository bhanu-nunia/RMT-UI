import Users from "../pages/private/Users";
import User from "../components/User";
import { privateRoutes } from "./privateRoutes";

const adminRoutes = [
  ...privateRoutes,
  {
    path: "/users",
    component: Users,
  },
  {
    path: "/users/:id",
    component: User,
  },
];

export { adminRoutes };

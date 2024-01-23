import Loadable from "app/components/Loadable";
import { lazy } from "react";

const AppList = Loadable(lazy(() => import("./AppList")));

const RegisterRoute = [{ path: "/lease", element: <AppList /> }];

export default RegisterRoute;

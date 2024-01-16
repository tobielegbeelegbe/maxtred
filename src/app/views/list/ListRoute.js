import Loadable from "app/components/Loadable";
import { lazy } from "react";

const AppList = Loadable(lazy(() => import("./AppList")));

const ListRoute = [{ path: "/incidents", element: <AppList /> }];

export default ListRoute;

import { lazy } from "react";
import Loadable from "app/components/Loadable";

const CrudTable = Loadable(lazy(() => import("./CrudTable")));

const crudRoute = [{ path: "/programs", element: <CrudTable /> }];

export default crudRoute;

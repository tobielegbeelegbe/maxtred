import Loadable from "app/components/Loadable";
import { lazy } from "react";

const Faq1 = Loadable(lazy(() => import("./faq/Faq1")));
const Faq2 = Loadable(lazy(() => import("./faq/Faq2")));
const OrderList = Loadable(lazy(() => import("./orders/OrderList")));
const UserList1 = Loadable(lazy(() => import("./user-list/UserList1")));
const UserList2 = Loadable(lazy(() => import("./user-list/UserList2")));
const UserList3 = Loadable(lazy(() => import("./user-list/UserList3")));
const UserList4 = Loadable(lazy(() => import("./user-list/UserList4")));
const ProductList = Loadable(lazy(() => import("./products/ProductList")));
const ProductForm = Loadable(lazy(() => import("./products/ProductForm")));
const CustomerList = Loadable(lazy(() => import("./customers/CustomerList")));
const Emergency = Loadable(lazy(() => import("./customers/emai")));
const ProductViewer = Loadable(lazy(() => import("./products/ProductViewer")));
const CustomerForm = Loadable(lazy(() => import("./customers/customer-form/CustomerForm")));
const Propertyrate = Loadable(lazy(() => import("./customers/propertyrates/PropertyRates")));
const CustomerViewer = Loadable(lazy(() => import("./customers/customer-viewer/CustomerViewer")));

const pagesRoutes = [
  { path: "/pages/projects", element: <UserList1 /> },
  { path: "/pages/delete-project", element: <UserList2 /> },
  { path: "/pages/user-list-3", element: <UserList3 /> },
  { path: "/pages/user-list-4", element: <UserList4 /> },
  { path: "/pages/propreport", element: <Faq1 /> },
  { path: "/pages/proprate", element: <Propertyrate /> },
  { path: "/pages/faq-2", element: <Faq2 /> },
  { path: "/pages/customer-list", element: <CustomerList /> },
  { path: "/pages/emergency", element: <Emergency /> },
  { path: "/pages/newprojects", element: <CustomerForm /> },
  { path: "/pages/view-customer", element: <CustomerViewer /> },
  { path: "/pages/Asset-list", element: <ProductList /> },
  { path: "/pages/new-product", element: <ProductForm /> },
  { path: "/pages/view-project", element: <ProductViewer /> },
  { path: "/pages/budget-list", element: <OrderList /> },
];

export default pagesRoutes;

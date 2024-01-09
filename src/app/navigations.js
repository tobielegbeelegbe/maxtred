import { authRoles } from "app/auth/authRoles";

export const navigations = [
  {
    name: "Dashboard",
    path: "/dashboard/default",
    icon: "dashboard",
    auth: authRoles.sa, // ONLY SUPER ADMIN(SA) CAN ACCESS
  },
  {
    name: "Projects",
    path: "/dashboard/analytics",
    icon: "analytics",
    auth: authRoles.admin, // ONLY SUPER ADMIN(SA) AND ADMIN CAN ACCESS
  },

  {
    name: "Assets",
    path: "/dashboard/analytics-2",
    icon: "work",
  },

  {
    name: "Budgets",
    path: "/dashboard/alternative",
    icon: "attach_money",
  },
  {
    name: "Incidents",
    path: "/dashboard/inventory-management",
    icon: "info_outline",
  },
  {
    name: "Roads",
    path: "/dashboard/sales",
    icon: "local_gas_station",
  },
  {
    name: "Reports",
    path: "/dashboard/learning-management",
    icon: "receipt",
  },

  { label: "Manage", type: "label" },

  {
    name: "Projects",
    icon: "people",
    children: [
      { name: "Project List", path: "/pages/user-list-1", iconText: "U1" },
      { name: "Delete Project", path: "/pages/user-list-2", iconText: "U2" },
      { name: "Create Project", path: "/pages/user-list-3", iconText: "U3" },
      { name: "Adjust Project Budgets", path: "/pages/user-list-4", iconText: "U3" },
      { name: "Assig Project Leader", path: "/pages/user-list-4", iconText: "U3" },
    ],
  },
  {
    name: "Assets",
    icon: "shopping_cart",
    children: [
      { name: "Asset List", path: "/pages/product-list", iconText: "PL" },
      { name: "Delete Asset", path: "/pages/view-product", iconText: "VP" },
      { name: "Create Asset", path: "/pages/new-product", iconText: "NP" },
      { name: "Assig Asset", path: "/pages/new-product", iconText: "NP" },
    ],
  },
  {
    name: "Budgets",
    icon: "folder",
    children: [
      { name: "Budgets List", path: "/pages/order-list", iconText: "OL" },
      { name: "Adjust Budgets", path: "/invoice/fdskfjdsuoiucrwevbgd", iconText: "VO" },
      { name: "Create Budgets", path: "/invoice/fdskfjdsuoiucrwevbgd", iconText: "VO" },
    ],
  },
  
  {
    name: "Users",
    icon: "people",
    children: [
      { name: "User List", path: "/pages/customer-list", iconText: "CL" },
      { name: "Project Leaders", path: "/pages/view-customer", iconText: "VC" },
      { name: "New User", path: "/pages/new-customer", iconText: "NC" },
    ],
  },
  {
    name: "Incidents",
    icon: "list",

    children: [{ name: "View", path: "/matx-list", iconText: "L" },
              { name: "Upload Report", path: "/forms/upload", iconText: "U" },
  ],
  },
  {
    name: "Session/Auth",
    icon: "security",
    children: [
      { name: "Sign in", iconText: "SI", path: "/session/signin" },
      { name: "Sign up", iconText: "SU", path: "/session/signup" },
      { name: "Forgot Password", iconText: "FP", path: "/session/forgot-password" },
      { name: "Error", iconText: "404", path: "/session/404" },
    ],
  },
  { name: "User Profile", path: "/page-layouts/user-profile", icon: "person" },
  { name: "Account", path: "/page-layouts/account", icon: "manage_accounts" },

  { label: "Apps", type: "label" },

  { name: "Calendar", icon: "date_range", path: "/calendar" },
  { name: "Chat", icon: "chat", path: "/chat" },
  { name: "Inbox", icon: "inbox", path: "/inbox" },
  { name: "Weather", icon: "wb_cloudy", path: "/todo/list" },
  { name: "CRUD Table", icon: "format_list_bulleted", path: "/crud-table" },

  // { label: "Tables", type: "label" },
  // {
  //   name: "Data Table",
  //   icon: "table_view",

  //   children: [
  //     { name: "Simple Mui Table", path: "/data-table/simple-mui-table", iconText: "T1" },
  //     { name: "Expandable Mui Table", path: "/data-table/expandable-mui-table", iconText: "T2" },
  //   ],
  // },


  { name: "Map", icon: "add_location", path: "/map" },

  { label: "Charts", type: "label" },
  {
    name: "Charts",
    icon: "trending_up",

    children: [
      { name: "Echarts", path: "/charts/echarts", iconText: "E" },
      { name: "Recharts", path: "/charts/recharts", iconText: "R" },
      { name: "Apex Charts", path: "/charts/apex-charts", iconText: "A" },
    ],
  },
  {
    name: "Documentation",
    icon: "launch",
    type: "extLink",
    path: "http://demos.ui-lib.com/matx-react-doc/",
  },
];

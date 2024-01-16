import { authRoles } from "app/auth/authRoles";

export const navigations = [
  {
    name: "Dashboard",
    path: "/dashboard/default",
    icon: "dashboard",
    auth: authRoles.sa, // ONLY SUPER ADMIN(SA) CAN ACCESS
  },
  
  { label: "Manage", type: "label" },

  {
    name: "Projects",
    icon: "people",
    children: [
      { name: "Project List", path: "/pages/projects", iconText: "U1" },
      { name: "Delete Project", path: "/pages/user-list-2", iconText: "U2" },
      { name: "Create Project", path: "/pages/newprojects", iconText: "U3" },
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
    name: "Programs",
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
  { name: "User Profile", path: "/page-layouts/profile", icon: "person" },
  { name: "Account", path: "/page-layouts/account", icon: "manage_accounts" },

  { label: "Apps", type: "label" },

  { name: "Calendar", icon: "date_range", path: "/calendar" },
  { name: "Chat", icon: "chat", path: "/chat" },
  { name: "Inbox", icon: "inbox", path: "/inbox" },
  { name: "Weather", icon: "wb_cloudy", path: "/todo/list" },
 

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


];

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
      { name: "Delete Project", path: "/pages/delete-project", iconText: "U2" },
      { name: "Create Project", path: "/pages/newprojects", iconText: "U3" },
    ],
  },
  {
    name: "Assets",
    icon: "shopping_cart",
    children: [
      { name: "Asset List", path: "/pages/Asset-list", iconText: "PL" },
      { name: "Create Asset", path: "/pages/new-product", iconText: "NP" },
    ],
  },
  {
    name: "Budgets",
    icon: "folder",
    children: [
      { name: "Budgets List", path: "/pages/budget-list", iconText: "OL" },
    ],
  },
  
  {
    name: "Programs",
    icon: "people",
    children: [
      { name: "Program List", path: "/pages/customer-list", iconText: "CL" },
      { name: "New Program", path: "/pages/new-customer", iconText: "NC" },
    ],
  },
  {
    name: "Incidents",
    icon: "list",

    children: [{ name: "View", path: "/incidents", iconText: "L" },
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

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
    name: "Construction Projects",
    icon: "people",
    children: [
      { name: "Project List", path: "/pages/projects", iconText: "U1" },
      { name: "Project Reports", path: "/page-layouts/projectreport", iconText: "U2" },
      { name: "Budget and Cashflow", path: "/pages/newprojects", iconText: "U3" },
      { name: "Programs", path: "/pages/newprojects", iconText: "U3" },
    ],
  },
  {
    name: "Property Maintenance",
    icon: "shopping_cart",
    children: [
      { name: "Asset List", path: "/pages/Asset-list", iconText: "PL" },
      { name: "Rental Register", path: "/pages/Asset-list", iconText: "PL" },
      { name: "Rates and Taxes", path: "/pages/proprate", iconText: "PL" },
      { name: "Reports", path: "/pages/propreport", iconText: "PL" },
    ],
  },
 
  {
    name: "Building Maintenance",
    icon: "people",
    children: [
      { name: "Emergency", path: "/pages/emergency", iconText: "CL" },
      { name: "Planned", path: "/pages/customer-list", iconText: "NC" },
    ],
  },

  {
    name: "EPWP",
    icon: "folder",
    children: [
      
      {
        name: "Reports",
        icon: "folder",
        children: [
          { name: "Construction", path: "/pages/budget-list", iconText: "OL" },
          { name: "Social Sector", path: "/pages/budget-list", iconText: "OL" },
          { name: "Non State", path: "/pages/budget-list", iconText: "OL" },
          { name: "Enviromental and Culture", path: "/pages/budget-list", iconText: "OL" },
          { name: "Infastructure", path: "/pages/budget-list", iconText: "OL" },
        ],
      },
      
      {
        name: "Campaigns",
        icon: "folder",
        children: [
          { name: "UWM Basket of Services Campaign", path: "/pages/budget-list", iconText: "OL" },
          
        ],
      },

      {
        name: "Policies",
        icon: "folder",
        children: [
          { name: "UWM Basket of Services Campaign", path: "/pages/budget-list", iconText: "OL" },
          
        ],
      },

      {
        name: "Summits",
        icon: "folder",
        children: [
          { name: "UWM Basket of Services Campaign", path: "/pages/budget-list", iconText: "OL" },
          
        ],
      },
    ],
  },

  {
    name: "TENDERS",
    icon: "people",
    children: [
      { name: "Program List", path: "/pages/customer-list", iconText: "CL" },
      { name: "New Program", path: "/pages/new-customer", iconText: "NC" },
    ],
  },
  
  {
    name: "INCIDENTS",
    icon: "list",

    children: [{ name: "View", path: "/incidents", iconText: "L" },
              { name: "Upload Report", path: "/forms/upload", iconText: "U" },
  ],
  },
  { name: "User Profile", path: "/page-layouts/profile", icon: "person" },
  { name: "Account", path: "/page-layouts/account", icon: "manage_accounts" },

  { label: "Apps", type: "label" },

  { name: "Calendar", icon: "date_range", path: "/calendar" },
  { name: "Maintenace Ticket", icon: "chat", path: "/chat" },
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

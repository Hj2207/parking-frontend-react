
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Initialize from "views/Initialize/Initialize";
import TableList from "views/TableList/TableList.js";

const dashboardRoutes = [
  {
    path: "/user",
    name: "Initialize",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: Initialize,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
 
  {
    path: "/table",
    name: "Report",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  }
];

export default dashboardRoutes;

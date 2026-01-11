import { RouteObject } from "react-router-dom"
import AdminLayout from "./AdminLayout"

// existing pages
import Login from "@/views/Dashboard/module/Auth/Login"
import RegisterAdmin from "@/views/Dashboard/module/Auth/RegisterAdmin"
import AdminForm from "@/views/Dashboard/module/Blog/AdminForm"

const AdminRoutes: RouteObject[] = [
  {
    path: "/admin/login",
    element: <Login />
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <AdminForm /> // temporary dashboard
      },
      {
        path: "approvals",
        element: <AdminForm /> // blog approval page later
      },
      {
        path: "manage-admins",
        element: <RegisterAdmin />
      }
    ]
  }
]

export default AdminRoutes

import { JSX, lazy, Suspense } from "react"
import { Outlet, Navigate } from "react-router"

// ---- Layout Components ----
import {Navbar} from "@components/Navbar"
import { Footer } from "@components/Footer"
import { LoadingFiller } from "@components/Loading"

// ---- Public Pages ----
const Dashboard = lazy(() => import("@views/Dashboard"))
const Essence = lazy(() => import("@views/Essence"))
const ReachOut = lazy(() => import("@views/ReachOut"))
const _404NotFound = lazy(() => import("@shared/components/_404NotFound"))

// ---- Admin Pages ----
const AdminLayout = lazy(() => import("../admin/AdminLayout"))
const Login = lazy(() => import("@views/Dashboard/module/sections/Auth/Login"))
const RegisterAdmin = lazy(
  () => import("@views/Dashboard/module/sections/Auth/RegisterAdmin")
)
const AdminForm = lazy(
  () => import("@views/Dashboard/module/sections/Blog/AdminForm")
)

// ---- Auth Guard ----
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("token")
  return token ? children : <Navigate to="/admin/login" replace />
}

// ---- Routes ----
export const routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingFiller />}>
        <Navbar />
        <Outlet />
        <Footer />
      </Suspense>
    ),
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: "home", element: <Dashboard /> },
      { path: "the-essence", element: <Essence /> },
      { path: "reach-out-to-us", element: <ReachOut /> },
      { path: "*", element: <_404NotFound /> }
    ]
  },

  {
    path: "/admin",
    element: (
      <Suspense fallback={<LoadingFiller />}>
        <AdminLayout />
      </Suspense>
    ),
    children: [
      { path: "login", element: <Login /> },
      {
        path: "register",
        element: (
          <ProtectedRoute>
            <RegisterAdmin />
          </ProtectedRoute>
        )
      },
      {
        path: "blog-approval",
        element: (
          <ProtectedRoute>
            <AdminForm />
          </ProtectedRoute>
        )
      }
    ]
  },

  { path: "*", element: <_404NotFound /> }
]

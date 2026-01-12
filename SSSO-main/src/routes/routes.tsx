import { JSX, lazy, Suspense } from "react";
import { Outlet, Navigate } from "react-router";

// ---- Layout Components ----
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
import { LoadingFiller } from "@components/Loading";

// ---- Public Pages ----
const Dashboard = lazy(() => import("@views/Dashboard"));
const Essence = lazy(() => import("@views/Essence"));
const ReachOut = lazy(() => import("@views/ReachOut"));
const _404NotFound = lazy(() => import("@shared/components/_404NotFound"));

// ---- Blog Pages ----
const BlogSection = lazy(() => import("@views/Dashboard/module/sections/Blog/Component"));
const BlogDetail = lazy(() => import("@views/Dashboard/module/sections/Blog/PostDetail"));
const AdminForm = lazy(() => import("@views/Dashboard/module/sections/Blog/AdminForm"));
const AdminBlogSection = lazy(() => import("@views/Dashboard/module/sections/Blog/AdminBlogSection"));


// ---- Admin Pages ----
const AdminLayout = lazy(() => import("../admin/AdminLayout"));
const Login = lazy(() => import("@views/Dashboard/module/sections/Auth/Login"));
const RegisterAdmin = lazy(() => import("@views/Dashboard/module/sections/Auth/RegisterAdmin"));

// ---- Auth Guard ----
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/admin/login" replace />;
};

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

      // Blog routes
      { path: "blog", element: <BlogSection /> }, // List all blogs
      { 
        path: "blog/write", 
        element: (
          <ProtectedRoute>
            <AdminForm />
          </ProtectedRoute>
        )
      },
      { path: "blog/:id", element: <BlogDetail /> }, // Blog detail page

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
            <AdminBlogSection />
          </ProtectedRoute>
        )
      }
    ]
  },

  { path: "*", element: <_404NotFound /> }
];

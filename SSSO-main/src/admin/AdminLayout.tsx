// src/admin/AdminLayout.tsx

import { Outlet } from "react-router"
import { Box } from "@mui/material"

const AdminLayout = () => {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      {/* Admin content only */}
      <Outlet />
    </Box>
  )
}

export default AdminLayout;

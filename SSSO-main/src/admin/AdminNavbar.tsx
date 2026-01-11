import { AppBar, Toolbar, Button, Box } from "@mui/material"
import { useNavigate } from "react-router-dom"

const AdminNavbar = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear()
    navigate("/admin/login")
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" onClick={() => navigate("/admin/dashboard")}>
            Dashboard
          </Button>
          <Button color="inherit" onClick={() => navigate("/admin/approvals")}>
            Blog Approvals
          </Button>
          <Button color="inherit" onClick={() => navigate("/admin/manage-admins")}>
            Manage Admins
          </Button>
        </Box>

        <Box sx={{ marginLeft: "auto" }}>
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default AdminNavbar

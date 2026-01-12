import { NavConfig } from "@config/navigation/config"
import React from "react"
import Component from "./Component"
import { useLocation } from "react-router"

const Container: React.FC = () => {
  const { pathname } = useLocation()

  // Set Scroll to zero on route change
  React.useEffect(() => {
    document.getElementById("root")?.scrollTo(0, 0)
  }, [pathname])

  const [mobileOpen, setMobileOpen] = React.useState(false)

  // ✅ Updated logic to handle Public vs Admin menus and include Logout
  const getNavList = React.useMemo(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    // 1. If NOT logged in, show the standard Public Menu
    if (!token) {
      return [
        "home", 
        "the-organisation", 
        "important-initiatives-and-programs", 
        "the-essence", 
        "blog", 
        "reach-out-to-us"
      ];
    }

    // 2. If LOGGED IN, show a clean, simplified Admin-Only Menu
    const adminMenu = [];

    // Add Home first for easy navigation
    adminMenu.push("home");

    // Add "Write Activity" for all logged-in admins
    adminMenu.push("write-blog");

    // Add "Add Admin" ONLY for superadmins
    if (role === "superadmin") {
      adminMenu.push("register-admin");
    }

    // ✅ Add Logout key so it appears in the Navbar
    adminMenu.push("logout");

    return adminMenu;
  }, [pathname]); // Re-calculates whenever the URL changes (critical for login/logout)

  // Popover Controls
  const [currentConfig, setCurrentConfig] = React.useState<string>("")
  const [anchorEl, setAnchorEl] = React.useState<
    HTMLAnchorElement | HTMLButtonElement | null
  >(null)

  const handlePopoverOpen = (
    event:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLButtonElement>,
    bypassAnchorEl: boolean = false
  ) => {
    event.preventDefault()
    if (!bypassAnchorEl) {
      setAnchorEl(event.currentTarget)
    }
    setCurrentConfig(event.currentTarget.id)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
    setCurrentConfig("")
  }

  // Operations
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
    setAnchorEl(null)
    setCurrentConfig("")
  }

  return (
    <Component
      navbarList={getNavList}
      currentConfig={currentConfig}
      drawer={{
        open: mobileOpen,
        toggleDrawer: handleDrawerToggle
      }}
      popover={{
        open: Boolean(anchorEl),
        anchorEl,
        handlePopoverOpen,
        handlePopoverClose
      }}
    />
  )
}

export default Container
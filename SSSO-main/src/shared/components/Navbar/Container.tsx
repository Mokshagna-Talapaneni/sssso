import { NavConfig } from "@config/navigation/config"
import React from "react"
import Component from "./Component"
import { useLocation } from "react-router"

const Container: React.FC = () => {
  // Set Scroll to zero on route change
  const { pathname } = useLocation()

  React.useEffect(() => {
    document.getElementById("root")?.scrollTo(0, 0)
  }, [pathname])

  //States

  const [mobileOpen, setMobileOpen] = React.useState(false)

  const getNavList = React.useMemo(() => {
    return Object.keys(NavConfig)
  }, [NavConfig])
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
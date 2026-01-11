import React from "react"
import { NavConfig } from "@config/navigation/config"
import { useLocation } from "react-router"
import { NavbarComponent } from "./types"
import { Typography, Button, IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import NavMenuLogo from "@assets/image/ssso-logo-dark.png"

import {
  NavAppBar,
  DrawerContainer,
  ContentFiller,
  NavMenuLogoContainer,
  LogoWrapper,
  NavMenuItemsContainer,
  NavMenuItemsCollapsedButtonContainer,
  NavLinkButton,
  NavLinkButtonWidthChild,
  NavDrawer,
  PopoverContainer
} from "./styles/styles"

const Component: React.FC<NavbarComponent> = ({
  navbarList,
  currentConfig,
  drawer: { open, toggleDrawer },
  popover: { open: openPopover, anchorEl, handlePopoverOpen, handlePopoverClose }
}) => {
  const { pathname } = useLocation()

  // Drawer content for mobile view
  const drawerComponent = React.useMemo(() => (
    <DrawerContainer>
      {!currentConfig &&
        navbarList.map((item) =>
          Array.isArray(NavConfig[item]?.children) && NavConfig[item]!.children!.length > 0 ? (
            <NavLinkButtonWidthChild
              key={item}
              id={item}
              type="button"
              onClick={(event) => handlePopoverOpen(event, true)}
            >
              <Typography variant="h2Bold">{NavConfig[item].label}</Typography>
            </NavLinkButtonWidthChild>
          ) : (
            <NavLinkButton
              key={item}
              to={NavConfig[item].path}
              onClick={toggleDrawer}
            >
              <Typography variant="h2Bold">{NavConfig[item].label}</Typography>
            </NavLinkButton>
          )
        )}

      {currentConfig &&
        NavConfig[currentConfig]?.children?.map((item) => (
          <NavLinkButton
            key={item.path}
            to={item.path}
            onClick={toggleDrawer}
          >
            <Typography variant="h2Bold">{item.label}</Typography>
          </NavLinkButton>
        ))}

      {currentConfig && (
        <Button variant="text" onClick={handlePopoverClose}>
          <ArrowBackIcon />
          <Typography variant="h4Bold">Back</Typography>
        </Button>
      )}

      <IconButton onClick={toggleDrawer}>
        <CloseIcon />
      </IconButton>
    </DrawerContainer>
  ), [navbarList, currentConfig, pathname])

  // Check if current menu has children for popover
  const hasChildren = React.useMemo(() => {
    return !!currentConfig && Array.isArray(NavConfig[currentConfig]?.children) && NavConfig[currentConfig]!.children!.length > 0
  }, [currentConfig])

  return (
    <>
      <NavAppBar>
        <NavMenuLogoContainer>
          <LogoWrapper>
            <img src={NavMenuLogo} alt="Logo" style={{ height: 40 }} />
          </LogoWrapper>

          <NavMenuItemsContainer>
            {navbarList.map((item) =>
              Array.isArray(NavConfig[item]?.children) && NavConfig[item]!.children!.length > 0 ? (
                <NavLinkButtonWidthChild
                  key={item}
                  type="button"
                  onClick={handlePopoverOpen}
                >
                  <Typography variant="h4Medium">{NavConfig[item].label}</Typography>
                </NavLinkButtonWidthChild>
              ) : (
                <NavLinkButton key={item} to={NavConfig[item].path}>
                  <Typography variant="h4Medium">{NavConfig[item].label}</Typography>
                </NavLinkButton>
              )
            )}
          </NavMenuItemsContainer>

          <NavMenuItemsCollapsedButtonContainer>
            <IconButton onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </NavMenuItemsCollapsedButtonContainer>
        </NavMenuLogoContainer>

        <NavDrawer
          anchor="left"
          open={open}
          onClose={toggleDrawer}
          ModalProps={{ keepMounted: true }}
        >
          {drawerComponent}
        </NavDrawer>
      </NavAppBar>

      <ContentFiller />
    </>
  )
}

export default Component

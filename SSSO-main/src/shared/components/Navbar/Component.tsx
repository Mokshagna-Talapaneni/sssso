import { NavConfig } from "@config/navigation/config"
import Container from "@mui/material/Container"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import React from "react"
import {
  ContentFiller,
  DrawerContainer,
  LogoWrapper,
  NavAppBar,
  NavDrawer,
  NavLinkButton,
  NavLinkButtonWidthChild,
  NavMenuItemsCollapsedButtonContainer,
  NavMenuItemsContainer,
  NavMenuLogoContainer,
  PopoverContainer
} from "./styles/styles"
import { NavbarComponent } from "./types"
import { Button, Divider, IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import NavMenuLogo from "@assets/image/ssso-logo-dark.png"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useLocation } from "react-router"

const Component: React.FC<NavbarComponent> = ({
  navbarList,
  currentConfig,
  drawer: { open, toggleDrawer },
  popover: {
    open: openPopover,
    anchorEl,
    handlePopoverOpen,
    handlePopoverClose
  }
}: NavbarComponent) => {
  const { pathname } = useLocation()

  const drawerComponent = React.useMemo(
    () => (
      <DrawerContainer>
        {!currentConfig &&
          navbarList.map((item) =>
            NavConfig[item]?.children!?.length > 0 ? (
              <NavLinkButtonWidthChild
                id={item}
                type="button"
                className={`nav-links ${NavConfig[item]?.children?.find((config) => pathname === config.path) ? "nav-links-active" : ""}`}
                onClick={(event) => {
                  handlePopoverOpen(event, true)
                }}
              >
                <Typography variant="h2Bold">
                  {NavConfig[item].label}
                </Typography>
              </NavLinkButtonWidthChild>
            ) : (
              <NavLinkButton
                to={NavConfig[item].path}
                className={`nav-links ${pathname === NavConfig[item].path ? "nav-links-active" : ""}`}
                onClick={toggleDrawer.bind(this)}
              >
                <Typography variant="h2Bold">
                  {NavConfig[item].label}
                </Typography>
              </NavLinkButton>
            )
          )}
        {currentConfig &&
          NavConfig?.[currentConfig as string]?.children!?.map((item) => (
            <NavLinkButton
              to={item.path}
              className={`nav-links ${pathname === item.path ? "nav-links-active" : ""}`}
              onClick={toggleDrawer.bind(this)}
            >
              <Typography variant="h2Bold">{item.label}</Typography>
            </NavLinkButton>
          ))}
        {currentConfig && (
          <Button
            variant="text"
            className="back-button"
            onClick={handlePopoverClose.bind(this)}
          >
            <ArrowBackIcon />
            <Typography variant="h4Bold">Back</Typography>
          </Button>
        )}
        <IconButton className="close-icon" onClick={toggleDrawer.bind(this)}>
          <CloseIcon />
        </IconButton>
      </DrawerContainer>
    ),
    [NavConfig, navbarList, currentConfig, pathname]
  )

  const hasChildren = React.useMemo(() => {
    return (
      currentConfig?.length > 0 &&
      NavConfig?.[currentConfig as string]?.children!?.length > 0
    )
  }, [currentConfig])

  return (
    <React.Fragment>
      <NavAppBar>
        <Container>
          <Toolbar disableGutters>
            <NavMenuLogoContainer>
              <LogoWrapper>
                <img src={NavMenuLogo} alt="Logo" className="nav-logo-img" />
              </LogoWrapper>

              <NavMenuItemsContainer>
                {navbarList.map((item) =>
                  NavConfig[item]?.children!?.length > 0 ? (
                    <NavLinkButtonWidthChild
                      id={item}
                      type="button"
                      aria-owns={openPopover ? "mouse-over-popover" : undefined}
                      aria-haspopup="true"
                      onClick={handlePopoverOpen}
                      className={`${NavConfig[item]?.children?.find((config) => pathname === config.path) ? "nav-links-active" : ""}`}
                    >
                      <Typography variant="h4Medium">
                        {NavConfig[item].label}
                      </Typography>
                    </NavLinkButtonWidthChild>
                  ) : (
                    <NavLinkButton
                      id={item}
                      type="button"
                      to={NavConfig[item].path}
                      aria-owns={openPopover ? "mouse-over-popover" : undefined}
                      aria-haspopup="true"
                      className={`${pathname === NavConfig[item].path ? "nav-links-active" : ""}`}
                    >
                      <Typography variant="h4Medium">
                        {NavConfig[item].label}
                      </Typography>
                    </NavLinkButton>
                  )
                )}
                <PopoverContainer
                  id="mouse-over-popover"
                  open={openPopover && hasChildren}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  onClose={handlePopoverClose}
                >
                  {currentConfig?.length > 0 &&
                    NavConfig?.[currentConfig as string]?.children!?.length >
                      0 &&
                    NavConfig!?.[currentConfig as string]!?.children?.map(
                      (item, index) => (
                        <>
                          <NavLinkButton
                            id={"sub-menu-" + item.id}
                            to={item.path}
                            aria-owns={
                              openPopover ? "mouse-over-popover" : undefined
                            }
                            aria-haspopup="true"
                            className={`sub-menu-links ${pathname === item.path ? "nav-links-active" : ""}`}
                            onClick={() => {
                              handlePopoverClose()
                            }}
                          >
                            <Typography variant="h4Medium">
                              {item.label}
                            </Typography>
                          </NavLinkButton>
                          {index !==
                            NavConfig?.[currentConfig as string]?.children!
                              ?.length -
                              1 && <Divider orientation="horizontal" />}
                        </>
                      )
                    )}
                </PopoverContainer>
              </NavMenuItemsContainer>

              <NavMenuItemsCollapsedButtonContainer>
                <IconButton onClick={toggleDrawer.bind(this)}>
                  <MenuIcon />
                </IconButton>
              </NavMenuItemsCollapsedButtonContainer>
            </NavMenuLogoContainer>
            <nav>
              <NavDrawer
                variant="temporary"
                open={open}
                onClose={toggleDrawer}
                ModalProps={{
                  keepMounted: true // Better open performance on mobile.
                }}
              >
                {drawerComponent}
              </NavDrawer>
            </nav>
          </Toolbar>
        </Container>
      </NavAppBar>
      <ContentFiller></ContentFiller>
    </React.Fragment>
  )
}
export default Component
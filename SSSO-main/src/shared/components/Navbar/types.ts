export type NavbarComponent = {
  navbarList: Array<string>
  currentConfig: string
  drawer: {
    open: boolean
    toggleDrawer: () => void
  }
  popover: {
    open: boolean
    anchorEl: HTMLAnchorElement | HTMLButtonElement | null
    handlePopoverOpen: (
      event:
        | React.MouseEvent<HTMLAnchorElement>
        | React.MouseEvent<HTMLButtonElement>,
      bypassAnchorEl?: boolean
    ) => void
    handlePopoverClose: () => void
  }
}
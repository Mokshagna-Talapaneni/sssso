import ResponsiveContainer from "@container/ResponsiveContainer"
import { GlobalStyles, ThemeProvider } from "@mui/material"
import { routes } from "@routes/routes"
import GlobalStylesConfig from "@theme/GlobalStylesConfig"
import theme from "@theme/MuiThemeV1"
import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router"
import "./index.styles"

const browserRouter = createBrowserRouter(routes, {
  basename: "/"
})

const App: React.FC = () => {
  return (
    <ResponsiveContainer>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={GlobalStylesConfig} />
        <RouterProvider router={browserRouter} />
      </ThemeProvider>
    </ResponsiveContainer>
  )
}

export default App

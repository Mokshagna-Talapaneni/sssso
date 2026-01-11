import React from "react"
import { ADAPTIVE_COEFFICIENT } from "@constants/GLOBAL"

type ResponsiveContainer = {
  children: React.ReactNode
}

const ResponsiveContainer: React.FC<ResponsiveContainer> = ({
  children
}: ResponsiveContainer) => {
  const setAdaptiveCoefficient = () => {
    const zoom = (window.outerWidth - 10) / window.innerWidth
    let adaptiveCoefficient = ADAPTIVE_COEFFICIENT.TARGET
    const windowWidth = Math.ceil(
      zoom >= 1
        ? window.innerWidth + window.innerWidth * (zoom - 1)
        : window.innerWidth - window.innerWidth * (1 - zoom)
    )
    if (windowWidth < 1280) {
      adaptiveCoefficient = ADAPTIVE_COEFFICIENT.SMALLER
    } else if (windowWidth >= 1920) {
      adaptiveCoefficient = ADAPTIVE_COEFFICIENT.WIDER
    }
    const appCoefficient = adaptiveCoefficient * zoom
    const htmlElement = document.getElementsByTagName("html")[0]
    htmlElement.setAttribute(
      "style",
      `font-size: calc(${appCoefficient}vh + ${appCoefficient}vw)`
    )
  }

  React.useEffect(() => {
    setAdaptiveCoefficient()
    window.addEventListener("resize", setAdaptiveCoefficient)
    return () => {
      window.removeEventListener("resize", setAdaptiveCoefficient)
    }
  }, [])

  return <>{children}</>
}

export default ResponsiveContainer

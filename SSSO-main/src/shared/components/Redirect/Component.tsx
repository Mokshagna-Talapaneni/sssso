import React from "react"
import { useNavigate } from "react-router"
import { RedirectComponentType } from "./types"

const Component: React.FC<RedirectComponentType> = ({
  path
}: RedirectComponentType) => {
  const navigate = useNavigate()

  React.useEffect(() => {
    navigate(path)
  })

  return null
}

export default Component

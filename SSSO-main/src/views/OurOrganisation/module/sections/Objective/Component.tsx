import React from "react"
import { ObjectiveContainer } from "./styled"
import { Typography } from "@mui/material"

const Objective: React.FC = () => {
  return (
    <ObjectiveContainer>
      <Typography variant="h1Bold" color="primary.main">
        Objectives
      </Typography>
      <Typography variant="h4" color="primary.main">
        Our organisation operates through three main wings, each dedicated to
        the holistic development of individuals and society through spiritual
        growth, education, and selfless service.
      </Typography>
    </ObjectiveContainer>
  )
}

export default Objective

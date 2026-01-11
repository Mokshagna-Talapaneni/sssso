import React from "react"
import { IntroContainer } from "./styled"
import { Typography } from "@mui/material"

const Introduction: React.FC = () => {
  return (
    <IntroContainer>
      <Typography variant="h1Bold" color="primary.main">
        The Wings of Sri Sathya Sai Seva Organisations
      </Typography>
      <Typography variant="h3" color="primary.main" textAlign={"justify"}>
        The <b>Sri Sathya Sai Seva Organisations</b> was established by{" "}
        <b>Bhagawan Sri Sathya Sai Baba</b> with the divine objective of
        fostering <b>harmony, unity, and love</b> among all beings. The
        organisation operates through three main wings —{" "}
        <b>Spiritual, Educational, and Service</b>. Though these three wings
        have distinct functions, they are deeply interconnected.{" "}
        <b>Spirituality and service</b> complement each other—spirituality
        serves as the <b>inspiration for service</b>, and service, in turn,
        brings inner joy, enriching one’s spiritual journey.
      </Typography>
      <Typography variant="h3Bold" color="primary.main">
        As Bhagawan Sri Sathya Sai Baba says:
      </Typography>
      <Typography variant="h3Cursive" color="primary.main">
        “Spiritual knowledge must be skilled into wisdom and should be put into
        practice in the form of service to humanity, to realise the ultimate
        objective for which this organisation has been established.”
      </Typography>
    </IntroContainer>
  )
}

export default Introduction

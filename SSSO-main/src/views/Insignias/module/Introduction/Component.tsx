import React from "react"
import { Divider, Section } from "./styled"
import { Typography } from "@mui/material"

export const IntroSection: React.FC = () => {
  return (
    <Section>
      <Typography variant="h1Bold" color="primary.main">
        The Holy Insignia of the organisation
      </Typography>
      <Typography variant="h4" color="primary.main" textAlign={"center"}>
        The emblem of the organisation, the scarf and badge for the Seva Dal,
        and the Prashanti flag together constitute the holy insignia of the
        organisation. These symbols hold deep spiritual significance and serve
        as a constant reminder to every member about the purpose of joining the
        organisation — namely, the necessity of discipline and a code of conduct
        to be followed, along with the spiritual responsibility to uplift
        oneself from manhood to Godhood.
      </Typography>
      <Divider />
    </Section>
  )
}

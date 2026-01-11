import React from "react"
import {
  LevelsCard,
  LevelsCardConnector,
  LevelsContainer,
  Section
} from "./styled"
import { Typography } from "@mui/material"

const UnitsSection: React.FC = () => {
  return (
    <Section>
      <Typography variant="h1Bold" color="primary.main">
        Administration of the Organisation
      </Typography>
      <Typography variant="h4" color="primary.main">
        The administration and functioning of the organisation’s units are
        guided by the Divine Charter bestowed by Bhagawan Sri Sathya Sai Baba
        himself. The guidelines, rules, and regulations were established by
        Swami and are firmly rooted in His divine discourses, direct
        instructions, and spiritual mandates. These foundational principles
        ensure that the organisation remains aligned with the values and
        teachings of Bhagawan.
      </Typography>
      <Typography variant="h4Bold" color="primary.main">
        The organisational structure is divided into different levels for
        efficient administration and service coordination:
      </Typography>
      <LevelsContainer>
        <LevelsCard>
          <Typography variant="h2Bold" color="primary.main">
            National Level
          </Typography>
          <Typography variant="h3Medium" color="primary.main">
            <ul>
              <li>All India President</li>
              <li>
                National Coordinators for each service wing (Spiritual, Service,
                Educational, etc.)
              </li>
            </ul>
          </Typography>
        </LevelsCard>
        <LevelsCardConnector orientation="vertical" />
        <LevelsCard>
          <Typography variant="h2Bold" color="primary.main">
            State Level
          </Typography>
          <Typography variant="h3Medium" color="primary.main">
            <ul>
              <li>State President</li>
              <li>State Vice Presidents</li>
              <li>State Coordinators for each Service Wing</li>
            </ul>
          </Typography>
        </LevelsCard>
        <LevelsCardConnector orientation="vertical" />
        <LevelsCard>
          <Typography variant="h2Bold" color="primary.main">
            District Level
          </Typography>
          <Typography variant="h3Medium" color="primary.main">
            <ul>
              <li>District President</li>
              <li>District Coordinators for each Service Wing</li>
            </ul>
          </Typography>
        </LevelsCard>
        <LevelsCardConnector orientation="vertical" />
        <LevelsCard>
          <Typography variant="h2Bold" color="primary.main">
            Samithi Level
          </Typography>
          <Typography variant="h3Medium" color="primary.main">
            <ul>
              <li>Samithi Convenor</li>
              <li>Samithi Coordinators for each Service Wing</li>
            </ul>
          </Typography>
        </LevelsCard>
        <LevelsCardConnector orientation="vertical" />
        <LevelsCard>
          <Typography variant="h2Bold" color="primary.main">
            Bhajan Mandali Level
          </Typography>
          <Typography variant="h3Medium" color="primary.main">
            <ul>
              <li>Bhajan Mandali In-charge</li>
            </ul>
          </Typography>
        </LevelsCard>
      </LevelsContainer>
    </Section>
  )
}

export default UnitsSection

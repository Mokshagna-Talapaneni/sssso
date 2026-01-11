import React from "react"
import { Typography } from "@mui/material"
import { Container, Stats, StatItem } from "./styled"

interface StatisticsProps {
  title?: string
  statistics?: Array<{
    number?: string
    label?: string
  }>
}

const Component: React.FC<StatisticsProps> = ({
  title = "",
  statistics = []
}) => {
  return (
    <Container>
      {title && (
        <div className="bottompadding">
          <Typography variant="h1CursiveBold">{title}</Typography>
        </div>
      )}
      <Stats>
        {statistics.map((statistics, index) => (
          <StatItem>
            <Typography variant="h1Bold" component="h1">
              {statistics.number}
            </Typography>
            <Typography key={index} variant="h3Bold" component="h3">
              {statistics.label}
            </Typography>
          </StatItem>
        ))}
      </Stats>
    </Container>
  )
}

export default Component

import DF8 from "@assets/svg/pray_women.svg"
import DF7 from "@assets/svg/law.svg"
import DF2 from "@assets/svg/clean.svg"
import DF3 from "@assets/svg/help.svg"
import DF1 from "@assets/svg/equality.svg"
import DF4 from "@assets/svg/stop.svg"
import DF6 from "@assets/svg/couple.svg"
import DF5 from "@assets/svg/happy.svg"
import { Grid, Typography } from "@mui/material"
import React from "react"
import { PrinciplesCard, PrinciplesContainer } from "./styled"

const Component: React.FC = () => {
  const Principles = React.useMemo(() => {
    return [
      {
        label: "Love all humans without discrimination",
        icon: <DF1 />
      },
      {
        label:
          "Keep your home and environment clean to ensure health and happiness for yourself and society",
        icon: <DF2 />
      },
      {
        label:
          "Help the needy with food, clothing, and shelter—with love and care; help them become self-reliant",
        icon: <DF3 />
      },
      {
        label:
          "Be an example of honesty, do not participate in any form of corruption",
        icon: <DF4 />
      },
      {
        label: "Do not develop jealousy, hatred, or envy",
        icon: <DF5 />
      },
      {
        label:
          "Be self-reliant, do not depend on others for your personal needs",
        icon: <DF6 />
      },
      {
        label: "Obey the laws, rules, and regulations of your country",
        icon: <DF7 />
      },
      {
        label: "Adore God, abhor sin",
        icon: <DF8 />
      }
    ]
  }, [])

  return (
    <PrinciplesContainer>
      <Typography variant="h1Bold">
        10 Principles of Sri Sathya Sai Baba Organisation
      </Typography>
      <Grid container spacing={2} justifyContent={"center"}>
        {Principles.map((item, index) => (
          <Grid
            size={{
              xs: 12,
              md: 6,
              lg: 4
            }}
            key={index}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <PrinciplesCard>
              <span className="icon-container">{item.icon}</span>
              <Typography variant="h4Bold" color="primary.main">
                {item.label}
              </Typography>
            </PrinciplesCard>
          </Grid>
        ))}
      </Grid>
    </PrinciplesContainer>
  )
}

export default Component

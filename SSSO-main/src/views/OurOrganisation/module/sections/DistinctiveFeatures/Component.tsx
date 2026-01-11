import React from "react"
import { DistinctiveFeaturesCard, DistinctiveFeaturesContainer } from "./styled"
import { Grid, Typography } from "@mui/material"
import DF1 from "@assets/svg/pray.svg"
import DF2 from "@assets/svg/equality.svg"
import DF3 from "@assets/svg/no_money.svg"
import DF4 from "@assets/svg/self_growth.svg"
import DF5 from "@assets/svg/unity.svg"
import DF6 from "@assets/svg/share_smiles.svg"
import DF7 from "@assets/svg/contribute.svg"

const Component: React.FC = () => {
  const DistinctiveFeatures = React.useMemo(() => {
    return [
      {
        label: "Voluntary and Spiritual",
        description:
          "A completely voluntary service organisation, built on a strong spiritual foundation.",
        icon: <DF1 />
      },
      {
        label: "Equality Without Discrimination",
        description:
          "There is no discrimination or distinction based on faith, caste, color, creed, or socio-economic status.",
        icon: <DF2 />
      },
      {
        label: "No Fees or Subscriptions",
        description:
          "No fees, subscriptions, or any other charges are levied for participation in any of the organisation's activities.",
        icon: <DF3 />
      },
      {
        label: "Self-Transformation",
        description:
          "The primary goal of being a member is one’s own spiritual upliftment, progressing towards realizing the inherent divinity present in each individual.",
        icon: <DF4 />
      },
      {
        label: "Unity of Faiths",
        description:
          "There is a strong emphasis on the equality of all religions and an acknowledgment of their underlying unity.",
        icon: <DF5 />
      },
      {
        label: "No Fanaticism",
        description:
          "The organisation does not seek to establish any new cult or sect. Instead, it is rooted in the universal principle of: “Love All, Serve All” “Fatherhood of God and Brotherhood of Man”",
        icon: <DF6 />
      },
      {
        label: "No Solicitation or Appeals for Funds",
        description:
          "All routine service and spiritual activities are funded through voluntary contributions made by the members themselves, without any solicitation or fundraising appeals.",
        icon: <DF7 />
      }
    ]
  }, [])

  return (
    <DistinctiveFeaturesContainer>
      <Typography variant="h1Bold">Distinctive Features</Typography>
      <Grid container spacing={2} justifyContent={"center"} width={"100%"}>
        {DistinctiveFeatures.map((item, index) => (
          <Grid
            size={{
              xs: 12,
              md: 6,
              lg: 4
            }}
            container
            key={index}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <DistinctiveFeaturesCard>
              <span className="icon-container">{item.icon}</span>
              <Typography variant="h3Bold" color="primary.main">
                {item.label}
              </Typography>
              <Typography variant="h3" color="primary.main">
                {item.description}
              </Typography>
            </DistinctiveFeaturesCard>
          </Grid>
        ))}
      </Grid>
    </DistinctiveFeaturesContainer>
  )
}

export default Component

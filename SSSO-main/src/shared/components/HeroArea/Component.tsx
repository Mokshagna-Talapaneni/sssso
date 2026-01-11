import React from "react"
import { ContentWrapper, HeroContainer, HeroOverlay } from "./styled"
import { Typography } from "@mui/material"
import { HeroAreaType } from "./types"

const HeroArea: React.FC<HeroAreaType> = ({
  header,
  subheader,
  imageUrl
}: HeroAreaType) => {
  return (
    <HeroContainer imgUrl={imageUrl}>
      <HeroOverlay>
        <ContentWrapper>
          <Typography variant="h1Bold" color="primary.light">
            {header}
          </Typography>
          <Typography variant="h2" color="primary.light" align="center">
            {subheader}
          </Typography>
        </ContentWrapper>
      </HeroOverlay>
    </HeroContainer>
  )
}

export default HeroArea

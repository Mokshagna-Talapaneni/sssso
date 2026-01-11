import React from "react"
import { CardContent, CardWrapper, Image, ImageContainer } from "./styled"
import { Typography } from "@mui/material"
import parse from "html-react-parser"

interface InsigniaCardProps {
  title: string
  description: string
  image: string
}

export const InsigniaCard: React.FC<InsigniaCardProps> = ({
  title,
  description,
  image
}) => (
  <CardWrapper>
    <ImageContainer className="image-container">
      <Image src={image} alt={title} />
    </ImageContainer>
    <CardContent className="card-content">
      <Typography variant="h2Bold" color="primary.main">
        {parse(title)}
      </Typography>
      <Typography variant="h4" color="primary.main">
        {parse(description)}
      </Typography>
    </CardContent>
  </CardWrapper>
)

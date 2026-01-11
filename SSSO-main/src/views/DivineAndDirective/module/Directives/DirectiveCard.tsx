import React from "react"
import { Card } from "./styled" // Import the Card object
import { Typography } from "@mui/material"
import parse from "html-react-parser"

interface DirectiveCardProps {
  icon: React.ReactElement
  title: string
  content: string
  imgUrl: string
}

export const DirectiveCard: React.FC<DirectiveCardProps> = ({
  icon: Icon,
  title,
  content,
  imgUrl
}) => (
  <Card.Wrapper>
    <Card.Content>
      <Card.Image imgUrl={imgUrl} />
      <Card.Header>
        <Card.Icon>{Icon}</Card.Icon>
        <Typography variant="h3Bold" component={"div"} color="primary.main">
          {title}
        </Typography>
      </Card.Header>
      <Typography className="card-content" variant="h4" component={"div"}>
        {parse(content)}
      </Typography>
    </Card.Content>
  </Card.Wrapper>
)

import React from "react"
import { Typography } from "@mui/material"
import {
  Container,
  TitleContainer,
  PrinciplesList,
  PrincipleItem,
  TechniquesGrid,
  Technique,
  Icon,
  GroupsList,
  GroupItem
} from "./styled"
import prayIcon from "@assets/image/prayer.png"
import groupSingingIcon from "@assets/image/group-singing.png"
import storyTellingIcon from "@assets/image/story-telling.png"
import groupActivityIcon from "@assets/image/group-activity.png"
import silentSittingIcon from "@assets/image/silent-sitting.png"

const Component: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <Typography variant="h1Bold">Structure</Typography>
      </TitleContainer>
      <Typography variant="h4Bold">
        The Balvikas course is based on two principles:
      </Typography>
      <PrinciplesList>
        <PrincipleItem>Existence of God</PrincipleItem>
        <PrincipleItem>Divinity in Man</PrincipleItem>
      </PrinciplesList>
      <Typography variant="h4Bold">
        The implementation of the Balvikas curriculum emphasizes five teaching
        techniques given by Sri Sathya Sai Baba Himself:
      </Typography>
      <TechniquesGrid>
        <Technique>
          <Icon src={prayIcon} alt="Prayer" />
          <Typography variant="h4">Prayer</Typography>
        </Technique>
        <Technique>
          <Icon src={groupSingingIcon} alt="Group Singing" />
          <Typography variant="h4">Group Singing</Typography>
        </Technique>
        <Technique>
          <Icon src={storyTellingIcon} alt="Story Telling" />
          <Typography variant="h4">Story Telling</Typography>
        </Technique>
        <Technique>
          <Icon src={groupActivityIcon} alt="Group Activity" />
          <Typography variant="h4">Group Activity</Typography>
        </Technique>
        <Technique>
          <Icon src={silentSittingIcon} alt="Silent Sitting" />
          <Typography variant="h4">Silent Sitting</Typography>
        </Technique>
      </TechniquesGrid>
      <Typography variant="h4">
        The nine years of the structured program are divided into three age
        groups:
      </Typography>
      <GroupsList>
        <GroupItem>
          <Typography variant="h3Bold">Group 1 (5-7 years): </Typography>
          <Typography variant="h4Medium">
            Learning through Doing and Making
          </Typography>
        </GroupItem>
        <GroupItem>
          <Typography variant="h3Bold">Group 2 (8-10 years): </Typography>
          <Typography variant="h4Medium">
            Learning through Making and Thinking
          </Typography>
        </GroupItem>
        <GroupItem>
          <Typography variant="h3Bold">Group 3 (11-13 years): </Typography>
          <Typography variant="h4Medium">
            Learning through Thinking and Creating
          </Typography>
        </GroupItem>
      </GroupsList>
      <Typography variant="h4">
        This program aims to help children practice the basic human values:
        Sathya (Truth), Dharma (Righteousness), Shanthi (Peace), Prema (Love),
        and Ahimsa (Non-Violence).
      </Typography>
    </Container>
  )
}

export default Component

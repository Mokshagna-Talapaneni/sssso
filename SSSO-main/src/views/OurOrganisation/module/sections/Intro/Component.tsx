import React from "react"
import { IntroContainer, SwamiImageBubbleContainer } from "./styled"
import { Typography } from "@mui/material"
import SwamiImage1 from "@assets/image/compressed/swami_images/34.webp"

const Component: React.FC = () => {
  return (
    <IntroContainer>
      <SwamiImageBubbleContainer swamiImage={SwamiImage1}>
        <div className="swami-pic"></div>
      </SwamiImageBubbleContainer>
      <div className="right-container">
        <Typography variant="h1Bold">
          Sri Sathya Sai Seva Organisations
        </Typography>
        <Typography variant="h4">
          The Sri Sathya Sai Seva Organisations was founded by Bhagawan Sri
          Sathya Sai Baba in the year 1965. It is a service-oriented
          organisation with a strong spiritual foundation.
        </Typography>
        <Typography variant="h4">
          The core purpose of the organisation is to <b>serve all of mankind</b>
          , regardless of religion, caste, creed, or sect. It provides a
          platform for members to engage in <b>service and other activities</b>{" "}
          as a form of sadhana (spiritual discipline), driven by the inner urge
          for
          <b>self-transformation</b> and the realisation of one’s{" "}
          <b>inherent divinity</b>.
        </Typography>
        <Typography variant="h4">
          The organisation, though named after Me, is not intended to promote my
          name, nor to establish a new cult or form of worship. Instead, it must
          aim to spread <b>interest in Japam</b> (recitation of God's name),{" "}
          <b>Dhyānam</b>
          (meditation), and other <b>Sadhanas</b> (spiritual practices) that
          guide individuals toward God.{" "}
        </Typography>{" "}
        <Typography variant="h4">
          Members should demonstrate the{" "}
          <b>joy that comes from bhajan singing</b>
          (devotional group singing) and <b>Namasmarana</b> (remembering and
          chanting God’s name).
        </Typography>
        <Typography variant="h3Bold">Peace Through Satsang and Seva</Typography>
        <Typography variant="h4">
          The peace that one can gain from Satsang (good company) is invaluable.
          Members must engage in Seva (selfless service) for the benefit of the
          helpless, the sick, the distressed, the illiterate, and the
          needy.{" "}
        </Typography>
        <Typography variant="h4">
          Seva must never be exhibitionist. It should be done without expecting
          any reward, not even gratitude or thanks from the recipients. True
          Seva is a Sadhana (spiritual practice), not a pastime for the rich or
          the well-off.{" "}
        </Typography>
        <Typography variant="h4">
          Each person must realize their own truth. That is the ultimate purpose
          of all teaching, healing, counseling, organizing, and guidance. — Sri
          Sathya Sai Baba
        </Typography>
      </div>
    </IntroContainer>
  )
}

export default Component

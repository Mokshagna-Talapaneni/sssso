import React from "react"
import { Image, Section } from "./styled"
import { Typography } from "@mui/material"
import SaiImage from "@assets/image/compressed/swami_images/1.webp"

const IntroSection: React.FC = () => {
  return (
    <Section>
      <div className="left-container">
        <Image src={SaiImage} alt="Sai Baba Image" />
      </div>
      <div className="right-container">
        <Typography variant="h1Bold">
          Sri Sathya Sai Seva Organisations
        </Typography>
        <Typography variant="h4">
          The <b>Sri Sathya Sai Seva Organisations</b> function primarily
          through its grassroots units known as{" "}
          <b>Samithis and Bhajan Mandalis</b>. These centers serve as platforms
          where individuals from{" "}
          <b>diverse backgrounds, religions, and faiths</b> come together at a
          common space (Sai Center) to practice the universal message of{" "}
          <b>"Love All, Serve All"</b> and pursue their personal sadhana
          (spiritual discipline) aimed at self-realisation through selfless
          service to humanity.
        </Typography>
      </div>
    </Section>
  )
}

export default IntroSection

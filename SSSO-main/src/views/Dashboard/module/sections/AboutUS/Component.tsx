import React from "react"
import { AboutUsContainer, SwamiImageBubbleContainer } from "./styled"
import { Typography } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { OutlinedButtonTransparent } from "@views/Dashboard/styles/styled"
import SwamiImage1 from "@assets/image/compressed/swami_images/37.webp"
import SwamiImage2 from "@assets/image/compressed/swami_images/22.webp"
import { NavConfig } from "@config/navigation/config"

const Component: React.FC = () => {
  return (
    <AboutUsContainer>
      <div className="left-section">
        <SwamiImageBubbleContainer swamiImage={SwamiImage1}>
          <div className="swami-pic"></div>
        </SwamiImageBubbleContainer>
        <SwamiImageBubbleContainer swamiImage={SwamiImage2}>
          <div className="swami-pic"></div>
        </SwamiImageBubbleContainer>
      </div>
      <div className="right-section">
        <Typography variant="h4Bold">About Us</Typography>
        <Typography variant="h1Bold">
          What is Sri Sathya Sai Seva Organisations
        </Typography>

        <Typography variant="h4">
          The <b>Sri Sathya Sai Seva Organisations</b>, founded by{" "}
          <b>Bhagawan Sri Sathya Sai Baba</b> in the year 1965, is a service
          organisation with a spiritual core and base to{" "}
          <b>
            benefit all mankind irrespective of religion, caste, creed or sect
          </b>
          . The Organisation serves as a platform for its members to undertake
          service and other activities as their <b>sadhana</b> (spiritual
          discipline) which is motivated by an urge for{" "}
          <b>self-transformation</b> to realise one’s inherent divinity.
        </Typography>
        <Typography variant="h4">
          It is emphasised that the <b>Sai Organisations</b> is not a religious
          or a proselytising organisation. It has also not been established to
          preach any particular religion. At no point is an individual asked to
          follow a certain religion or rituals. On the contrary each is inspired
          to <b>follow his own faith</b> so as to ensure that a Hindu becomes a
          better Hindu, a Muslim becomes a better Muslim, a Christian becomes a
          better Christian and so on. In fact, this spiritual basis inspires
          everyone to pursue his own religion better by putting into practice{" "}
          <b>Love and Selflessness</b>. That is why the Organisation features in
          its emblem the symbols of the major <b>religions of mankind</b>.
        </Typography>
        <Typography variant="h4">
          Thus, without any distinction of religion, nationality, race,
          socio-economic status, either for those who work in the Organisation
          or for those who are served by it, the Organisation transcends all
          barriers leading humanity towards the ideal of{" "}
          <b>‘Fatherhood of God and Brotherhood of Man’</b>.
        </Typography>
        <OutlinedButtonTransparent
          to={NavConfig?.["the-organisation"]?.children?.[0].path || "/"}
          target="_blank"
        >
          <Typography variant="h4Medium">Know more</Typography>
          <ArrowForwardIcon />
        </OutlinedButtonTransparent>
      </div>
    </AboutUsContainer>
  )
}

export default Component

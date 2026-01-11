import React from "react" // Import the styled components
import { Image, DivineDirectiveContainer } from "./styled"
import { Typography } from "@mui/material"
import SwamiImage from "@assets/image/compressed/swami_images/44.webp"

const JourneySection: React.FC = () => {
  return (
    <DivineDirectiveContainer>
      <div className="left-container">
        <Image src={SwamiImage} alt="Meditation and spirituality" />
      </div>
      <div className="right-container">
        <Typography variant="h1Bold" component={"h1"} color="primary.main">
          Sri Sathya Sai Seva Organisations
        </Typography>
        <Typography variant="h4" component={"div"} color="primary.main">
          The Sri Sathya Sai Seva Organisations was founded in 1960 by Bhagawan
          Sri Sathya Sai Baba to enable its members to undertake service
          activities as a means to spiritual advancement. The Organisation draws
          its inspiration, guidance, and strength from Bhagawan Baba’s mission
          of proclaiming the truth of man’s inherent divinity, a truth upheld by
          all major religions.
        </Typography>
        <Typography variant="h4" component={"div"} color="primary.main">
          The Organisation’s primary objective is to practice selfless love and
          service, without discrimination based on religion, nationality, race,
          or socio-economic status—both among those who serve and those who are
          served. It transcends all barriers, guiding humanity towards the ideal
          of the Fatherhood of God and the Brotherhood of Man.
        </Typography>
        <Typography variant="h4" component={"div"} color="primary.main">
          This spiritual foundation empowers every individual to live their own
          religion better by putting its teachings into practice through love
          and service to the God who resides in every heart.
        </Typography>
        <Typography variant="h4" component={"div"} color="primary.main">
          The Sri Sathya Sai Seva Organisations India embraces the equality of
          all religions and promotes global unity. With the motto “Transforming
          Self to Transform the World,” the Organisation, through thousands of
          Seva Samithis and Bhajan Mandalis across India, provides a platform
          for divine transformation—for individuals and society alike.
        </Typography>
      </div>
    </DivineDirectiveContainer>
  )
}

export default JourneySection

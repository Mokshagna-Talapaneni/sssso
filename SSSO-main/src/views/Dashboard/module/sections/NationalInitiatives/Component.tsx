import React from "react"
import {
  NationalInitiativeDescription,
  NationalInitiativesContainer,
  NationalInitiativesImageContainer
} from "./styled"
import { Divider, Typography } from "@mui/material"
import { BasicCarousel } from "@components/Carousel"
import { NavLink } from "react-router"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import GS1 from "@assets/image/compressed/gram_seva/1.webp"
import GS2 from "@assets/image/compressed/gram_seva/2.webp"
import GS3 from "@assets/image/compressed/gram_seva/3.webp"
import GS5 from "@assets/image/compressed/gram_seva/5.webp"
import GS6 from "@assets/image/compressed/gram_seva/6.webp"
import GS7 from "@assets/image/compressed/gram_seva/7.webp"
import GS8 from "@assets/image/compressed/gram_seva/8.webp"
import PT1 from "@assets/image/compressed/prema_tharu/1.webp"
import PT2 from "@assets/image/compressed/prema_tharu/2.webp"
import PT3 from "@assets/image/compressed/prema_tharu/3.webp"
import PT4 from "@assets/image/compressed/prema_tharu/4.webp"
import PT5 from "@assets/image/compressed/prema_tharu/5.webp"
import PT6 from "@assets/image/compressed/prema_tharu/6.webp"

const Component: React.FC = () => {
  return (
    <NationalInitiativesContainer>
      <div className="container">
        <NationalInitiativesImageContainer>
          <div className="hover-div">
            <NavLink
              to={"https://www.google.com/"}
              target="_blank"
              className={"link-to-page"}
            >
              <Typography variant="h1Bold" color="primary.main">
                Sri Sathya Sai National Initiatives
              </Typography>
              <ArrowForwardIcon />
            </NavLink>
          </div>
        </NationalInitiativesImageContainer>
      </div>
      <div className="container container-resize">
        <NationalInitiativeDescription>
          <Typography variant="h1Bold" color="primary.main">
            Our National Initiatives
          </Typography>
          <Typography variant="h4" color="primary.main">
            In 2022, the Sri Sathya Sai Seva Organisations launched four
            national initiatives in honor of Bhagawan Sri Sathya Sai Baba's
            Centenary. These initiatives include <b>Grama Seva</b>, which aims
            to adopt 6,000 villages across India, focusing on rural development
            in areas like education, healthcare, and spirituality. As of 2025,
            223 villages in West Bengal are adopted. <b>Prema Tharu</b> promotes
            environmental stewardship by planting 1 crore trees nationwide,
            reflecting Swami's teachings of love and service.{" "}
            <b>Narayan Seva</b> serves food to the hungry, with over 3,050
            cooked food sevas and 1.75 lakh beneficiaries, including a daily
            breakfast seva at the Chittaranjan National Cancer Institute.
            Finally, <b>Ceiling on Desires</b> encourages self-discipline and
            contentment by controlling desires, teaching that true happiness
            comes from simplicity and selfless service. These initiatives
            reflect the organisation’s commitment to holistic development, love,
            and service in line with Swami’s teachings.
          </Typography>
          <Divider
            variant="fullWidth"
            orientation="horizontal"
            className="divider"
          />
          <BasicCarousel
            height={200}
            perPage={3}
            gap={8}
            slides={[
              {
                image: GS1,
                title: "Grama Seva 1",
                description: "Grama Seva 1"
              },
              {
                image: GS2,
                title: "Grama Seva 2",
                description: "Grama Seva 2"
              },
              {
                image: GS3,
                title: "Grama Seva 3",
                description: "Grama Seva 3"
              },
              {
                image: GS5,
                title: "Grama Seva 5",
                description: "Grama Seva 5"
              },
              {
                image: GS6,
                title: "Grama Seva 6",
                description: "Grama Seva 6"
              },
              {
                image: GS7,
                title: "Grama Seva 7",
                description: "Grama Seva 7"
              },
              {
                image: GS8,
                title: "Grama Seva 8",
                description: "Grama Seva 8"
              },
              {
                image: PT1,
                title: "Prema Tharu 1",
                description: "Prema Tharu 1"
              },
              {
                image: PT2,
                title: "Prema Tharu 2",
                description: "Prema Tharu 2"
              },
              {
                image: PT3,
                title: "Prema Tharu 3",
                description: "Prema Tharu 3"
              },
              {
                image: PT4,
                title: "Prema Tharu 4",
                description: "Prema Tharu 4"
              },
              {
                image: PT5,
                title: "Prema Tharu 5",
                description: "Prema Tharu 5"
              },
              {
                image: PT6,
                title: "Prema Tharu 6",
                description: "Prema Tharu 6"
              }
            ]}
          />
        </NationalInitiativeDescription>
      </div>
    </NationalInitiativesContainer>
  )
}

export default Component

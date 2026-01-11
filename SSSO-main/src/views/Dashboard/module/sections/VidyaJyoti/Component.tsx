import React from "react"
import {
  VidyaJyotiDescription,
  VidyaJyotiContainer,
  VidyaJyotiImageContainer
} from "./styled"
import { Divider, Typography } from "@mui/material"
import { BasicCarousel } from "@components/Carousel"
import { NavLink } from "react-router"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import VDJ1 from "@assets/image/compressed/vidya_jyoti/1.webp"
import VDJ2 from "@assets/image/compressed/vidya_jyoti/2.webp"
import VDJ3 from "@assets/image/compressed/vidya_jyoti/3.webp"
import VDJ4 from "@assets/image/compressed/vidya_jyoti/4.webp"
import VDJ6 from "@assets/image/compressed/vidya_jyoti/6.webp"

const Component: React.FC = () => {
  return (
    <VidyaJyotiContainer>
      <div className="container">
        <VidyaJyotiImageContainer>
          <div className="hover-div">
            <NavLink
              to={"https://www.google.com/"}
              target="_blank"
              className={"link-to-page"}
            >
              <Typography variant="h1Bold" color="primary.main">
                Sri Sathya Sai Vidya Jyothi
              </Typography>
              <ArrowForwardIcon />
            </NavLink>
          </div>
        </VidyaJyotiImageContainer>
      </div>
      <div className="container container-resize">
        <VidyaJyotiDescription>
          <Typography variant="h1Bold" color="primary.main">
            Sri Sathya Sai Vidya Jyothi
          </Typography>
          <Typography variant="h4" color="primary.main">
            The Sri Sathya Sai Vidya Jyothi (SSSVJ) Programme aims to enhance
            the educational experience in adopted schools by motivating and
            supporting students. It goes beyond just academic learning by
            creating a holistic learning environment through various
            participants such as <b>children</b>, <b>gurus/teachers</b>,{" "}
            <b>parents</b>, <b>sevadals</b>, and <b>school management</b>. The
            programme is structured around four core phases: <b>Energise</b>,{" "}
            <b>Empower</b>, <b>Equip</b>, and <b>Evolve</b>. <b>Energise</b>{" "}
            focuses on sparking enthusiasm, while <b>Empower</b> aims to enhance
            students' well-being and build their character. <b>Equip</b>{" "}
            addresses infrastructure needs like repairing classrooms and
            installing facilities, and <b>Evolve</b> connects the school with
            the wider community through competitions and collaboration.
            Activities include conducting <b>Bal Vikas</b> classes, health
            check-ups, counselling, soft skills training, academic support, and
            providing infrastructural improvements such as benches, toilets, and
            drinking water facilities, fostering a complete development of the
            children and their school environment.
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
                image: VDJ1,
                title: "Sri Sathya Sai Vidya Jyothi - Image 1",
                description: "Sri Sathya Sai Vidya Jyothi - Image 1"
              },
              {
                image: VDJ2,
                title: "Sri Sathya Sai Vidya Jyothi - Image 2",
                description: "Sri Sathya Sai Vidya Jyothi - Image 2"
              },
              {
                image: VDJ3,
                title: "Sri Sathya Sai Vidya Jyothi - Image 3",
                description: "Sri Sathya Sai Vidya Jyothi - Image 3"
              },
              {
                image: VDJ4,
                title: "Sri Sathya Sai Vidya Jyothi - Image 4",
                description: "Sri Sathya Sai Vidya Jyothi - Image 4"
              },
              {
                image: VDJ6,
                title: "Sri Sathya Sai Vidya Jyothi - Image 5",
                description: "Sri Sathya Sai Vidya Jyothi - Image 5"
              }
            ]}
          />
        </VidyaJyotiDescription>
      </div>
    </VidyaJyotiContainer>
  )
}

export default Component

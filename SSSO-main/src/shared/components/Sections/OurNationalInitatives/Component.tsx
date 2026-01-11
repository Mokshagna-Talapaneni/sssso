import React from "react"
import {
  OurNationalInitativesContainer,
  OurNationalInitativesHeader,
  Heading,
  SectionContainer,
  CommonIMG
} from "./styled"
import baba from "@assets/image/Swami.png"
import premaTharu from "@assets/image/compressed/prema_tharu/1.webp"
import gramaSeva from "@assets/image/compressed/gram_seva/4.webp"
import narayanaSeva from "@assets/image/compressed/narayanSeva/1.webp"
import ceilingOnDesire from "@assets/image/compressed/ceilingOnDesire/1.webp"
import { Typography } from "@mui/material"

const Component: React.FC = () => {
  return (
    <>
      <OurNationalInitativesContainer>
        <Heading>
          <Typography variant="h1Bold" color="primary.main">
            National Initiatives
          </Typography>
        </Heading>
        <OurNationalInitativesHeader>
          <Typography variant="h2Bold" color="primary.main">
            What is it?
          </Typography>
          <Typography variant="h3Medium" color="primary.main">
            In the year 2022, national initiatives were launched focusing on the
            following key areas as an offering to Swami on His Centenary
            Celebration
          </Typography>
          <Typography variant="h4" color="primary.main">
            <ul>
              <li>
                <Typography variant="h4Bold" color="text.secondry">
                  Grama Seva :{" "}
                </Typography>{" "}
                Adoption of 6,000 villages
              </li>
              <li>
                <Typography variant="h4Bold"> Prema Tharu: </Typography>
                Planting 1 crore trees across the nation
              </li>
              <li>
                <Typography variant="h4Bold"> Narayan Seva : </Typography>
                Serving and feeding Nara Narayan every day
              </li>
              <li>
                <Typography variant="h4Bold">Ceiling on Desires: </Typography>
                Controlling the mind from chasing desires
              </li>
            </ul>
          </Typography>
          <Typography variant="h2Medium" color="primary.main">
            Now let us discuss how our state is working on these four key
            initiatives in detail:
          </Typography>
        </OurNationalInitativesHeader>
        <SectionContainer>
          <div className="left-container">
            <CommonIMG src={gramaSeva} />
          </div>
          <div className="right-container">
            <Typography variant="h1Bold" color="primary.main">
              Grama Seva
            </Typography>
            <Typography variant="h2Bold" color="primary.main">
              Background:
            </Typography>
            <Typography
              variant="h4Medium"
              color="primary.main"
              textAlign={"justify"}
            >
              On Swami's 60th birthday, He urged devotees to adopt 6,000
              villages across India, which inspired the Grama Seva initiative.
              This service went beyond material aid, focusing on personal
              interaction and door-to-door service, fostering love and
              compassion. Sevadals experience the joy of selfless giving,
              embodying Bhagavan's teaching that Service to Man is service to
              God.
            </Typography>
            <Typography variant="h2Bold" color="primary.main">
              What is Grama Seva?
            </Typography>
            <Typography
              variant="h4Medium"
              color="primary.main"
              textAlign={"justify"}
            >
              The Sri Sathya Sai Grama Seva is a holistic rural development
              initiative inspired by the teachings of Sri Sathya Sai Baba. It
              aims to uplift villages by addressing key areas such as education,
              healthcare, sanitation, socio-economic development, and spiritual
              well-being. The Sri Sathya Sai Seva Organisations (SSSSO) adopts
              villages and works towards sustainable progress through selfless
              service.
            </Typography>
            <Typography variant="h2Bold" color="primary.main">
              Key Areas of Grama Seva:
            </Typography>
            <Typography variant="h4Medium" color="primary.main">
              Ø Educare, Ø Medicare, Ø Spiritual Care, Ø Employment Care, Ø
              Agricare, Ø Socio Care, Ø Individual Care
            </Typography>
            <Typography variant="h2Bold" color="primary.main">
              As of 2025:
            </Typography>
            <Typography variant="h4Medium" color="primary.main">
              Number of Adopted Villages in West Bengal (One) – 223
            </Typography>
          </div>
        </SectionContainer>
        <SectionContainer rowReverse>
          <div className="left-container">
            <CommonIMG src={premaTharu} />
          </div>
          <div className="right-container">
            <Typography variant="h1Bold" color="primary.main">
              Prema Tharu
            </Typography>
            <Typography
              variant="h4Medium"
              color="primary.main"
              textAlign={"justify"}
            >
              Sri Sathya Sai Prema Tharu is an initiative to plant millions of
              trees as an offering to Bhagawan's centenary. This project
              embodies the spirit of love, service, and environmental
              stewardship, reflecting Bhagawan's teachings.
            </Typography>
            <Typography variant="h2Bold" color="primary.main">
              As of 2025:
            </Typography>
            <Typography variant="h4Medium" color="primary.main">
              Total number of trees planted across West Bengal (One) – 12000
            </Typography>
          </div>
        </SectionContainer>
        <SectionContainer>
          <div className="left-container">
            <CommonIMG src={narayanaSeva} />
          </div>
          <div className="right-container">
            <Typography variant="h1Bold" color="primary.main">
              Narayan Seva
            </Typography>
            <Typography variant="h2CursiveBold" color="primary.main">
              "When you do Narayan Seva, consider Swami as a beggar at your
              door."
            </Typography>
            <Typography variant="h2CursiveBold" color="error">
              – Swami (November 1975)
            </Typography>
            <Typography variant="h4Medium" color="primary.main">
              Keeping love and sacrifice as the driving force, this initiative
              aims to serve food to the hungry and needy Narayans. This is the
              soul of Narayan Seva.
            </Typography>
            <Typography variant="h2Bold" color="primary.main">
              Statistics across the State (As of 2024):
            </Typography>
            <Typography variant="h2Bold" color="primary.main">
              Cooked Food Sevas:
            </Typography>
            <Typography variant="h4Medium" color="primary.main">
              <ul>
                <li>Total: 3,050</li>
                <li>Beneficiaries: 1,75,112</li>
              </ul>
            </Typography>
            <Typography variant="h2Bold" color="primary.main">
              Breakfast Narayan Seva:
            </Typography>
            <Typography variant="h4Medium" color="primary.main">
              <ul>
                <li>Total served: 1,05,576</li>
              </ul>
            </Typography>
            <Typography variant="h2Bold" color="primary.main">
              Sri Sathya Sai Amrutha Kalasam:
            </Typography>
            <Typography variant="h4Medium" color="primary.main">
              <ul>
                <li>Families Involved: 1,500+</li>
                <li>Beneficiary Families: 1,400+</li>
              </ul>
            </Typography>
            <Typography variant="h2Bold" color="primary.main">
              Items Served:
            </Typography>
            <Typography variant="h4Medium" color="primary.main">
              <ul>
                <li>5,400+ kg Rice</li>
                <li>750+ kg Dal</li>
              </ul>
            </Typography>
            <Typography variant="h2Bold" color="primary.main">
              365 Days Nitya Narayan Breakfast Seva:
            </Typography>
            <Typography variant="h4Medium" color="primary.main">
              <ul>
                <li>
                  This daily seva is taking place at Chittaranjan National
                  Cancer Institute.
                </li>
                <li>Number of Beneficiaries Served per Day: 54</li>
              </ul>
            </Typography>
          </div>
        </SectionContainer>
        <SectionContainer rowReverse>
          <div className="left-container">
            <CommonIMG src={ceilingOnDesire} />
          </div>
          <div className="right-container">
            <Typography variant="h1Bold" color="primary.main">
              Ceiling on Desires
            </Typography>
            <Typography variant="h2CursiveBold" color="primary.main">
              "Less Luggage, More Comfort Makes Travel Comfortable"
            </Typography>
            <Typography variant="h2CursiveBold" color="error">
              - Sri Sathya Sai Baba
            </Typography>
            <Typography variant="h4Medium" color="primary.main">
              Ceiling on Desires means exercising control over our desires. One
              can truly be happy only when desires are under control. The joy of
              acquiring something is temporary. Our standard of thinking should
              evolve rather than merely elevating our standard of living.
              Service performed with love and sacrifice brings a contentment
              that cannot be found elsewhere.
            </Typography>
          </div>
        </SectionContainer>
      </OurNationalInitativesContainer>
    </>
  )
}

export default Component

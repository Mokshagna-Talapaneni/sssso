import React from "react"
import {
  EducationWingContainer,
  OurWingsContainer,
  OurWingsHeader,
  QuotesContainer,
  ServiceWingContainer,
  SpiritualWingContainer
} from "./styled"
import { Typography } from "@mui/material"
import { BasicCarousel } from "@components/Carousel"
import { OutlinedButton } from "@views/Dashboard/styles/styled"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import SW1 from "@assets/image/compressed/service_wing/1.webp"
import SW2 from "@assets/image/compressed/service_wing/2.webp"
import SW3 from "@assets/image/compressed/service_wing/3.webp"
import SW4 from "@assets/image/compressed/service_wing/4.webp"
import SW5 from "@assets/image/compressed/service_wing/5.webp"
import SW6 from "@assets/image/compressed/service_wing/6.webp"
import SW7 from "@assets/image/compressed/service_wing/7.webp"
import SW8 from "@assets/image/compressed/service_wing/8.webp"
import SW9 from "@assets/image/compressed/service_wing/9.webp"
import SW10 from "@assets/image/compressed/service_wing/10.webp"
import EDW1 from "@assets/image/compressed/education_wing/1.webp"
import EDW2 from "@assets/image/compressed/education_wing/2.webp"
import EDW3 from "@assets/image/compressed/education_wing/3.webp"
import EDW4 from "@assets/image/compressed/education_wing/4.webp"
import EDW5 from "@assets/image/compressed/education_wing/5.webp"
import EDW6 from "@assets/image/compressed/education_wing/6.webp"
import EDW7 from "@assets/image/compressed/education_wing/7.webp"
import EDW8 from "@assets/image/compressed/education_wing/8.webp"
import EDW9 from "@assets/image/compressed/education_wing/9.webp"
import EDW10 from "@assets/image/compressed/education_wing/10.webp"
import SPW1 from "@assets/image/compressed/spiritual_wing/8.jpeg"
import SPW2 from "@assets/image/compressed/spiritual_wing/2.webp"
import SPW3 from "@assets/image/compressed/spiritual_wing/3.webp"
import SPW4 from "@assets/image/compressed/spiritual_wing/4.webp"
import SPW5 from "@assets/image/compressed/spiritual_wing/5.webp"
import SPW6 from "@assets/image/compressed/spiritual_wing/6.webp"
import SPW7 from "@assets/image/compressed/spiritual_wing/7.webp"
import { grey } from "@mui/material/colors"
import { NavConfig } from "@config/navigation/config"

const Component: React.FC = () => {
  return (
    <OurWingsContainer>
      <OurWingsHeader>
        <Typography variant="h1Bold" color="primary.main">
          Our Wings
        </Typography>
        <Typography variant="h4Medium" color="primary.main">
          The Sri Sathya Sai Seva Organisations operates through three main
          wings: Spiritual, Educational, and Service. These wings collectively
          represent the principles of Worship, Wisdom, and Work, forming the
          framework for personal and spiritual development. At the heart of all
          these wings lies the concept of "Seva" or selfless service, which is
          not merely an activity but a sacred path—Sadhana—toward realizing the
          true Self, the Atma. This divine service is the cornerstone of the
          organisation’s purpose, as envisioned by Bhagawan Sri Sathya Sai Baba.
          By engaging in Seva, individuals purify their hearts, cultivate
          compassion, and detach from ego and selfishness.
        </Typography>
        <Typography variant="h4Medium" color={grey[600]}>
          Each wing complements the other in helping individuals attain
          spiritual growth and inner transformation. The Spiritual wing nurtures
          devotion and inner awakening, the Educational wing imparts value-based
          learning and clarity of purpose, and the Service wing offers
          opportunities to put love into action. Participation in all three is
          not only encouraged but seen as essential for holistic development.
          Swami Himself lovingly laid down this path, enabling all to realize
          their latent divinity. His grace guides members to use these wings not
          just to serve others, but to evolve spiritually, thereby fulfilling
          the organisation's noble mission of love, unity, and self-realisation.
        </Typography>
      </OurWingsHeader>
      <ServiceWingContainer>
        <div className="container slide-container">
          <BasicCarousel
            height={500}
            slides={[
              {
                image: SW8,
                title: "Service Wing 1",

                description: "Service Wing 1"
              },
              {
                image: SW2,
                title: "Service Wing 2",

                description: "Service Wing 2"
              },
              {
                image: SW3,
                title: "Service Wing 3",

                description: "Service Wing 3"
              },
              {
                image: SW4,
                title: "Service Wing 4",

                description: "Service Wing 4"
              },
              {
                image: SW5,
                title: "Service Wing 5",

                description: "Service Wing 5"
              },
              {
                image: SW6,
                title: "Service Wing 6",

                description: "Service Wing 6"
              },
              {
                image: SW7,
                title: "Service Wing 7",

                description: "Service Wing 7"
              },
              {
                image: SW1,
                title: "Service Wing 8",

                description: "Service Wing 8"
              },
              {
                image: SW9,
                title: "Service Wing 9",

                description: "Service Wing 9"
              },
              {
                image: SW10,
                title: "Service Wing 10",

                description: "Service Wing 10"
              }
            ]}
          />
        </div>
        <div className="container">
          <Typography variant="h1Bold" color="primary.main">
            Service Wing
          </Typography>
          <Typography variant="h4" color="primary.main">
            Society is built upon the collective coming together of individuals
            who cooperate with one another. This cooperation must arise from
            spontaneous and pure intentions, which is the essence of <b>seva</b>{" "}
            (selfless service). According to Swami, to truly engage in seva, one
            must possess a compassionate heart and a willingness to sacrifice.
            For the betterment of the country and the world, the spirit of
            sacrifice, enthusiasm, constructive imagination, pure motivation,
            and unselfish alertness are urgently required. Members of the Sri
            Sathya Sai Seva Organisation are encouraged to treat seva as{" "}
            <b>Sadhana</b> (spiritual practice), performing it with humility and
            without any trace of pride or ego. The organisation is deeply
            involved in a variety of selfless service activities, including{" "}
            <b>Narayan Seva</b>, which provides food and support to the needy,{" "}
            <b>Medical Camps</b> to offer health services,{" "}
            <b>Veterinary Camps</b> for animal welfare,{" "}
            <b>Educational Assistance</b> to underprivileged children, and{" "}
            <b>Vocational Training</b> to empower individuals with skills. Other
            initiatives include the <b>Sai Rehabilitation Programme</b> to
            assist those in need,{" "}
            <b>
              Visits to Hospitals, Old Age Homes, Orphanages, and Leprosy
              Colonies
            </b>{" "}
            to offer comfort and care, <b>Cleaning & Sanitation</b> efforts to
            maintain hygiene, <b>Grama Seva</b> (service in villages) to uplift
            rural communities, and <b>Disaster Management</b>, which provides
            relief during natural calamities or accidents.
          </Typography>
          <OutlinedButton
            to={{
              pathname: NavConfig["the-organisation"]?.children?.[1].path,
              search: "?id=service-wing"
            }}
            target="_blank"
            usePrimaryMain
          >
            <Typography variant="h4Medium">Know more</Typography>
            <ArrowForwardIosIcon />
          </OutlinedButton>
        </div>
      </ServiceWingContainer>
      <SpiritualWingContainer>
        <div className="container slide-container">
          <BasicCarousel
            height={500}
            slides={[
              {
                image: SPW1,
                title: "Spiritual Wing 1",
                description: "Spiritual Wing 1"
              },
              {
                image: SPW2,
                title: "Spiritual Wing 2",
                description: "Spiritual Wing 2"
              },
              {
                image: SPW3,
                title: "Spiritual Wing 3",
                description: "Spiritual Wing 3"
              },
              {
                image: SPW4,
                title: "Spiritual Wing 4",
                description: "Spiritual Wing 4"
              },
              {
                image: SPW5,
                title: "Spiritual Wing 5",
                description: "Spiritual Wing 5"
              },
              {
                image: SPW6,
                title: "Spiritual Wing 6",
                description: "Spiritual Wing 6"
              },
              {
                image: SPW7,
                title: "Spiritual Wing 7",
                description: "Spiritual Wing 7"
              }
            ]}
          />
        </div>
        <div className="container">
          <Typography variant="h1Bold" color="primary.main">
            Spiritual Wing
          </Typography>
          <Typography variant="h4" color="primary.main">
            For Baba, true spirituality does not solely rely on performing
            practices such as Dhyana (meditation), Japa (chanting), or singing
            Bhajans. While these activities serve as means to understand
            spirituality, the essence of it lies in having the Lord as the Guide
            and walking the Path of Dharma (right action). The highest form of
            Dharma is to recognize the Divine presence in every being, be aware
            of it at every moment, and immerse oneself in the bliss (Ananda)
            that comes with this realisation. Although it is challenging to
            attain complete surrender, the merciful Lord has granted us various
            activities through His Divine Spiritual Wing to help us on this
            journey. These include <b>Bhajans</b> (devotional songs),{" "}
            <b>Nagara Sankeertan</b> (public chanting of God's name),{" "}
            <b>Study Circles</b> to discuss spiritual teachings,{" "}
            <b>Naam Smarana</b> (constant remembrance of God's name),{" "}
            <b>Japa and Meditation</b> for mental discipline and spiritual
            focus, and <b>Spiritual Classes and Lectures</b> to deepen our
            understanding of the Divine path. These practices are not just
            rituals but vital steps toward living a life of constant awareness
            of the Divine, leading to ultimate bliss and spiritual fulfillment.
          </Typography>
          <OutlinedButton
            to={{
              pathname: NavConfig["the-organisation"]?.children?.[1].path,
              search: "?id=spiritual-wing"
            }}
            target="_blank"
            usePrimaryMain
          >
            <Typography variant="h4Medium">Know more</Typography>
            <ArrowForwardIosIcon />
          </OutlinedButton>
        </div>
      </SpiritualWingContainer>
      <EducationWingContainer>
        <div className="container slide-container">
          <BasicCarousel
            height={500}
            slides={[
              {
                image: EDW10,
                title: "Education Wing 1",
                description: "Education Wing 1"
              },
              {
                image: EDW2,
                title: "Education Wing 2",
                description: "Education Wing 2"
              },
              {
                image: EDW3,
                title: "Education Wing 3",
                description: "Education Wing 3"
              },
              {
                image: EDW4,
                title: "Education Wing 4",
                description: "Education Wing 4"
              },
              {
                image: EDW5,
                title: "Education Wing 5",
                description: "Education Wing 5"
              },
              {
                image: EDW6,
                title: "Education Wing 6",
                description: "Education Wing 6"
              },
              {
                image: EDW7,
                title: "Education Wing 7",
                description: "Education Wing 7"
              },
              {
                image: EDW8,
                title: "Education Wing 8",
                description: "Education Wing 8"
              },
              {
                image: EDW9,
                title: "Education Wing 9",
                description: "Education Wing 9"
              },
              {
                image: EDW1,
                title: "Education Wing 10",
                description: "Education Wing 10"
              }
            ]}
          />
        </div>
        <div className="container">
          <Typography variant="h1Bold" color="primary.main">
            Education Wing
          </Typography>
          <Typography variant="h4" color="primary.main">
            <b>"Nahi Gnyanena Sadrisham"</b> means there is nothing that equals
            Gnyana (knowledge). But what is Gnyana? True Gnyana is the
            realisation of the Lord’s grace and being in His immediate presence.
            It is not something that can be achieved suddenly or purchased.
            Rather, it is the culmination of spiritual efforts across many
            lifetimes, through righteous actions and pure thoughts. To attain
            this ultimate goal, the Education wing of the Sri Sathya Sai Seva
            Organisation focuses on various transformative activities. These
            include <b>Bal Vikas education</b> for children up to 15 years old,
            which nurtures their spiritual development, and various youth
            initiatives aimed at promoting Human Values. These initiatives
            include <b>Youth Pada Yatra</b>,{" "}
            <b>National Leadership Program (NLP)</b>,{" "}
            <b>Courses on Indian Culture and Spirituality</b>, and{" "}
            <b>Bal Vikas alumni meets</b>. Additionally, the Education wing
            organizes <b>Parenting Programmes</b> for young parents, providing
            guidance on values-based parenting, so they can practice morality
            and virtues in their daily lives. Through these educational efforts,
            the Organisation strives to foster wisdom, ethical behavior, and
            spiritual growth, which are key to attaining true Gnyana and
            realizing the Lord’s grace.
          </Typography>
          <OutlinedButton
            to={{
              pathname: NavConfig["the-organisation"]?.children?.[1].path,
              search: "?id=education-wing"
            }}
            target="_blank"
            usePrimaryMain
          >
            <Typography variant="h4Medium">Know more</Typography>
            <ArrowForwardIosIcon />
          </OutlinedButton>
        </div>
      </EducationWingContainer>
      <QuotesContainer>
        <Typography variant="h1CursiveBold" color="primary.main">
          " Spiritual knowledge must be skilled into wisdom and should be put
          into practice in the form of service to humanity "
        </Typography>
        <Typography variant="h2CursiveBold" color="error">
          - Bhagwan Sri Sathya Sai Baba
        </Typography>
      </QuotesContainer>
    </OurWingsContainer>
  )
}

export default Component

import React from "react"
import { Typography } from "@mui/material"
import { ContactContainer, CommonIMG, SUBLIST } from "./styled"
import CONTACT_IMG from "@assets/image/contact.jpg"
import PHONE from "@assets/svg/phone.svg"
import LOCATION from "@assets/svg/location.svg"
import MAIL from "@assets/svg/mail.svg"
const Component: React.FC = () => {
  return (
    <>
      <ContactContainer>
        <div className="left-container">
          <CommonIMG src={CONTACT_IMG} />
        </div>
        <div className="right-container">
          <Typography variant="h1Bold" color="primary.main">
            We'd love to hear from you! Get in touch with us.
          </Typography>
          <Typography variant="h2Bold" color="primary.main">
            Contact Information
          </Typography>
          <Typography variant="h3Medium" color="primary.main">
            Feel free to reach out to us through our contact information below.
          </Typography>
          <ul>
            <SUBLIST>
              <div className="icon-wrapper">
                <LOCATION />
                <Typography variant="h4Medium" color="primary.main">
                  Address:{" "}
                </Typography>
              </div>
              <Typography variant="h4" color="primary.main" align="left">
                163, Acharya Jagdish Chandra Basu Road, Kolkata - 700014
              </Typography>
            </SUBLIST>
            <SUBLIST>
              <div className="icon-wrapper">
                <MAIL />
                <Typography variant="h4Medium" color="primary.main">
                  Email:{" "}
                </Typography>
              </div>
              <Typography variant="h4Bold" color="primary.main">
                <a href={`mailto:scg.youth.wb1@ssssoindia.org`}>
                  scg.youth.wb1@ssssoindia.org
                </a>
              </Typography>
            </SUBLIST>
          </ul>
        </div>
      </ContactContainer>
    </>
  )
}

export default Component

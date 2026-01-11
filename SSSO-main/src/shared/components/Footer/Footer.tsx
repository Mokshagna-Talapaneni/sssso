import React from "react"
import {
  DividerHeader,
  FooterContainer,
  LeftContainer,
  RightContainer
} from "./styles/styled"
import { IconButton, Typography } from "@mui/material"
import FooterImage from "@assets/image/Footer.png"
import FacebookIcon from "@mui/icons-material/Facebook"
import YouTubeIcon from "@mui/icons-material/YouTube"
import { NavLink } from "react-router"
import FooterImageLogo from "@assets/image/ssso-logo.png"
import { NavConfig } from "@config/navigation/config"

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="content-area">
        <LeftContainer className="main-containers">
          <div id="seva-org-container">
            <div className="swami-image-quote">
              <img
                src={FooterImage}
                alt="Sai Baba Image"
                className="quote-item-image"
              />
              <Typography variant="h3Cursive" className="quote-item-text">
                <i>
                  " Spiritual knowledge must be skilled into wisdom and should
                  be put into practice in the form of service to humanity "
                </i>
              </Typography>
            </div>
            <div className="image-container">
              <img
                src={FooterImageLogo}
                alt="Sri Sathya Sai Seva Organisations"
              />
            </div>
            <Typography variant="h4" color="primary.light">
              Founded in 1965 by Sri Sathya Sai Baba, the Sri Sathya Sai Seva
              Organisations promotes selfless service rooted in spiritual
              discipline. It encourages practices like bhajans, meditation, and
              Seva without desire for recognition, aiming for
              self-transformation and realisation of divinity through love,
              unity, and service to all humanity.
            </Typography>
            <div className="link-container">
              <Typography variant="h2Bold">Social Media</Typography>
              <DividerHeader orientation="horizontal" />
              <div className="links">
                <NavLink to="https://m.facebook.com/ssssowb/" target="_blank">
                  <IconButton>
                    <FacebookIcon />
                  </IconButton>
                </NavLink>
                <NavLink
                  to="https://www.youtube.com/@srisathyasaisevaorganisati3429"
                  target="_blank"
                >
                  <IconButton>
                    <YouTubeIcon />
                  </IconButton>
                </NavLink>
              </div>
            </div>
          </div>
        </LeftContainer>
        <RightContainer className="main-containers">
          <div id="seva-org-links">
            <div className="important-links">
              <div className="link-header">
                <Typography variant="h2Bold">Important Links</Typography>
                <DividerHeader orientation="horizontal" />
              </div>
              <Typography variant="h4Medium" color="primary.light" align="left">
                <NavLink
                  to={"https://prasanthigram.sssihms.org/"}
                  target="_blank"
                >
                  Sri Sathya Sai Super Speciality Hospital - Prasanthi Gram
                </NavLink>
              </Typography>
              <Typography variant="h4Medium" color="primary.light" align="left">
                <NavLink to={"https://whitefield.sssihms.org/"} target="_blank">
                  Sri Sathya Sai Institute of Higher Medical Sciences -
                  Whitefield
                </NavLink>
              </Typography>
              <Typography variant="h4Medium" color="primary.light" align="left">
                <NavLink
                  to={"https://sssmt.org.in/pages/mobile-hospital%201.htm"}
                  target="_blank"
                >
                  Sri Sathya Sai Mobile Hospital
                </NavLink>
              </Typography>
              <Typography variant="h4Medium" color="primary.light" align="left">
                <NavLink to={"https://www.sssgh.org/"} target="_blank">
                  Sri Sathya Sai General Hospital
                </NavLink>
              </Typography>
              <Typography variant="h4Medium" color="primary.light" align="left">
                <NavLink to={"https://www.sssihl.edu.in/"} target="_blank">
                  Sri Sathya Sai Institute of Higher Learning
                </NavLink>
              </Typography>
              <Typography variant="h4Medium" color="primary.light" align="left">
                <NavLink to={NavConfig["the-essence"]?.path} target="_blank">
                  {NavConfig["the-essence"]?.label}
                </NavLink>
              </Typography>
              <Typography variant="h4Medium" color="primary.light" align="left">
                <NavLink
                  to={NavConfig["reach-out-to-us"]?.path}
                  target="_blank"
                >
                  {NavConfig["reach-out-to-us"]?.label}
                </NavLink>
              </Typography>
            </div>
            <div className="site-links">
              <div className="link-header">
                <Typography variant="h2Bold">Site Links</Typography>
                <DividerHeader orientation="horizontal" />
              </div>
              <Typography variant="h4Medium" color="primary.light" align="left">
                <NavLink
                  to={
                    "https://play.google.com/store/apps/details?id=com.sssdivyangaseva"
                  }
                  target="_blank"
                >
                  Download Sri Sathya Sai Divyangjan Seva
                </NavLink>
              </Typography>
              <Typography variant="h4Medium" color="primary.light" align="left">
                <NavLink
                  to={"https://www.saiconnect.app/desktoplogin"}
                  target="_blank"
                >
                  Download Sai Connect App
                </NavLink>
              </Typography>

              <Typography variant="h4Medium" color="primary.light" align="left">
                <NavLink
                  to={"https://liquidlove.ssssoindia.org/"}
                  target="_blank"
                >
                  Liquid Love Portal
                </NavLink>
              </Typography>
              <Typography variant="h4Medium" color="primary.light" align="left">
                <NavLink to={"http://www.sssbpt.org/"} target="_blank">
                  Sri Sathya Sai Books and Publication Trust
                </NavLink>
              </Typography>
              <Typography variant="h4Medium" color="primary.light" align="left">
                <NavLink
                  to={"https://www.srisathyasaividyavahini.org/"}
                  target="_blank"
                >
                  Sri Sathya Sai Vidya Vahini
                </NavLink>
              </Typography>
              <Typography variant="h4Medium" color="primary.light" align="left">
                <NavLink
                  to={"https://srisathyasaipublications.com/index.php"}
                  target="_blank"
                >
                  Sanatana Sarathi
                </NavLink>
              </Typography>
              <Typography variant="h4Medium" color="primary.light" align="left">
                <NavLink
                  to={"https://www.prasanthinilayam.in/"}
                  target="_blank"
                >
                  Prashanti Accomodation
                </NavLink>
              </Typography>
              <Typography variant="h4Medium" color="primary.light" align="left">
                <NavLink to={"https://sssbalvikas.in/"} target="_blank">
                  Balvikas National Website
                </NavLink>
              </Typography>
            </div>
          </div>
        </RightContainer>
      </div>
      <div className="copyright-area">
        <Typography variant="h4Medium" color="primary.light">
          Sri Sathya Sai Seva Organisations &copy; 2025.
        </Typography>
      </div>
    </FooterContainer>
  )
}

export default Footer

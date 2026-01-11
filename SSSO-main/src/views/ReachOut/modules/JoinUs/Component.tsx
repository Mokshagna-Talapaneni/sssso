import React from "react"
import { JoinUsContainer } from "./styled"
import { Button, Typography } from "@mui/material"
import HelpingHands from "@assets/svg/LucidIcons/helping_hands.svg"

const Component: React.FC = () => {
  const [isFormEnabled, setIsFormEnabled] = React.useState<boolean>(false)

  return (
    <JoinUsContainer>
      {!isFormEnabled && (
        <React.Fragment>
          <div className="icon-container">
            <HelpingHands />
          </div>
          <div className="join-root">
            <Typography variant="h1Bold" color="primary.main">
              {" "}
              Join Us today on your path to spiritual journey!
            </Typography>
            <div className="join-container">
              <Button
                variant="text"
                onClick={() => {
                  setIsFormEnabled(!isFormEnabled)
                }}
              >
                <Typography variant="h2" color="primary.main">
                  Click Here
                </Typography>
              </Button>{" "}
              <Typography variant="h2" color="primary.main">
                to connect with us
              </Typography>
            </div>
          </div>
        </React.Fragment>
      )}
      {isFormEnabled && (
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdzSUnjUPsp_iZbzsaOTJSnRkEFOulZPT-rfo3wCtWRyczH1Q/viewform?embedded=true"
          width={window.innerWidth}
          height={"1303"}
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      )}
    </JoinUsContainer>
  )
}

export default Component

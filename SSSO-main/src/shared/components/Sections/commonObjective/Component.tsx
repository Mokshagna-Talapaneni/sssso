import React, { useState } from "react"
import { Typography } from "@mui/material"
import YouTube from "react-youtube"
import { IIprogramsContainer, Objective, CommonIMG } from "./styled"
import { OutlinedButton } from "@views/Dashboard/styles/styled"

interface ObjectiveProps {
  img: string
  head2?: string
  content?: string
  videoId?: string
  footer?: string
}

const Component: React.FC<ObjectiveProps> = ({
  img,
  footer,
  head2 = "",
  content = "",
  videoId = ""
}) => {
  const [playVideo, setPlayVideo] = useState(false)
  const handlePlay = () => {
    setPlayVideo(true)
  }
  return (
    <IIprogramsContainer>
      {!playVideo ? (
        <Objective>
          <div className="container">
            <Typography variant="h1Bold" color="primary.main">
              Objectives
            </Typography>
            {head2 && (
              <Typography variant="h2Bold" color="secondary.light">
                {head2}
              </Typography>
            )}
            <Typography variant="h4Medium" color="secondary.light">
              {content}
            </Typography>
            {footer && (
              <Typography variant="h4Medium" color="text.disabled">
                {footer}
              </Typography>
            )}
            {videoId && (
              <OutlinedButton to={""} onClick={handlePlay} usePrimaryMain>
                ▶<Typography variant="h4Medium">Watch Video</Typography>
              </OutlinedButton>
            )}
          </div>
          <div className="container slide-container">
            <CommonIMG src={img} alt="BABA IMAGE" />
          </div>
        </Objective>
      ) : (
        <YouTube videoId={videoId} opts={{ width: "100%", height: "315" }} />
      )}
    </IIprogramsContainer>
  )
}

export default Component

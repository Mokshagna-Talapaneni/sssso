import React from "react"
import {
  PrashantiLiveContainer,
  PrashantiLiveDescriptionContainer,
  PrashantiLiveEmbedContainer
} from "./styled"
import { Typography } from "@mui/material"
import YouTube, { YouTubeProps } from "react-youtube"
import { OutlinedButton } from "@views/Dashboard/styles/styled"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

const Component: React.FC = () => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      start: 1
    }
  }

  return (
    <PrashantiLiveContainer>
      <PrashantiLiveEmbedContainer>
        <YouTube
          videoId="13k62Y_lT3c"
          opts={opts}
          onReady={onPlayerReady}
          className="youtube-player"
          iframeClassName="youtube-iframe"
        />
      </PrashantiLiveEmbedContainer>
      <PrashantiLiveDescriptionContainer>
        <Typography variant="h1Bold" color="primary.light">
          Experience Divine Bliss with <i>Prashanti Mandir Live</i>
        </Typography>
        <Typography variant="h4Medium" color="primary.light">
          Immerse yourself in spiritual bliss with{" "}
          <span className="highlight">Prashanti Mandir Live</span>. Tune in to
          experience the soothing Vedam chantings, inspiring teachings of
          Bhagwan Baba, soulful bhajans, uplifting discourses, and the divine
          Maha Samadhi darshan. This platform offers a profound connection to
          peace, wisdom, and spiritual enrichment through its audio and video
          offerings. Let these sacred vibrations elevate your mind and spirit,
          guiding you toward inner harmony and deeper understanding. Embrace
          this divine opportunity to nurture your soul and stay connected to the
          timeless teachings and blessings of Bhagwan Baba.
        </Typography>
        <OutlinedButton
          to="https://www.youtube.com/@PrasanthiMandirLiveRadioSai/streams"
          target="_blank"
        >
          <Typography variant="h4Medium">More videos</Typography>
          <ArrowForwardIosIcon />
        </OutlinedButton>
      </PrashantiLiveDescriptionContainer>
    </PrashantiLiveContainer>
  )
}

export default Component

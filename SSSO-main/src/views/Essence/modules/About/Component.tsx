import SwamiImage1 from "@assets/image/essence-1.png"
import SwamiImage2 from "@assets/image/essence-2.png"
import PDF from "@assets/pdf/the_essence.pdf"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Button, IconButton, Modal, Typography } from "@mui/material"
import React from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { OutlinedButtonTransparent } from "../../styled/style"
import {
  AboutContainer,
  PDFContainer,
  SwamiImageBubbleContainer
} from "./styled"
import CloseIcon from "@mui/icons-material/Close"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString()

const options = {
  cMapUrl: "/cmaps/"
}

const Component: React.FC = () => {
  const [numPages, setNumPages] = React.useState<number>()
  const [pageNumber, setPageNumber] = React.useState<number>(1)
  const [isPDFLoaded, setIsPDFLoaded] = React.useState(false)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages)
    setIsPDFLoaded(true)
  }

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setPageNumber(1)
    setIsPDFLoaded(false)
  }

  return (
    <AboutContainer>
      <div className="left-section">
        <SwamiImageBubbleContainer swamiImage={SwamiImage1}>
          <div className="swami-pic"></div>
        </SwamiImageBubbleContainer>
        <SwamiImageBubbleContainer swamiImage={SwamiImage2}>
          <div className="swami-pic"></div>
        </SwamiImageBubbleContainer>
      </div>
      <div className="right-section">
        <Typography variant="h3Bold">The Essence</Typography>
        <Typography variant="h1Bold">
          About the book of{" "}
          <Typography variant="h1Bold" color="primary.main">
            The Essence
          </Typography>
        </Typography>

        <Typography variant="h3">
          The <b>Sri Sathya Sai Seva Organisations</b>, founded by{" "}
          <b>Bhagawan Sri Sathya Sai Baba</b> in 1965, is a{" "}
          <b>spiritual service movement</b> that transcends barriers of{" "}
          <b>religion, caste, and creed</b>. It exists not for propagating any
          particular belief, but to <b>awaken the divinity</b> within each
          individual through <b>love</b> and <b>selfless service</b>. Rooted in
          the five core values of <b>truth, righteousness, peace, love,</b> and{" "}
          <b>nonviolence</b>, the organisation encourages members to see{" "}
          <b>service (seva)</b> as a <b>spiritual discipline (sadhana)</b>. The
          primary objective is <b>self-transformation</b> through community
          service, devotional practices, and <b>unity of all faiths</b>. Its
          emblem reflects the <b>harmony of world religions</b>, and its
          activities aim to lead individuals toward <b>inner peace</b> and the{" "}
          <b>realisation of their spiritual essence</b>.
        </Typography>
        <Typography variant="h3">
          The organisation operates through three wings:{" "}
          <b>Spiritual, Educational,</b> and <b>Service</b>—symbolizing{" "}
          <b>worship, wisdom,</b> and <b>work</b>. Each wing contributes to a{" "}
          <b>holistic spiritual journey</b>, with activities such as{" "}
          <b>bhajans</b>, <b>Bal Vikas education</b> for children, and various
          humanitarian services like <b>Narayan Seva</b> and{" "}
          <b>medical camps</b>. Membership is <b>voluntary</b>, without fees,
          and guided by a <b>code of conduct</b> and <b>ten principles</b> that
          inspire <b>disciplined, value-based living</b>. With no affiliation to
          government or financial solicitation from the public, the Sri Sathya
          Sai Seva Organisations emphasize <b>humility, purity,</b> and{" "}
          <b>unity</b>—serving as a <b>beacon of love</b> and{" "}
          <b>spiritual upliftment</b> for all of humanity.
        </Typography>
        <div className="pdf-controls">
          <OutlinedButtonTransparent variant="text" onClick={handleOpen}>
            <Typography variant="h3Medium">Read Now</Typography>
            <ArrowForwardIcon />
          </OutlinedButtonTransparent>
          <OutlinedButtonTransparent variant="text">
            <a href={PDF} download="The Essence.pdf">
              <Typography variant="h3Medium">Download Now</Typography>
            </a>
            <ArrowForwardIcon />
          </OutlinedButtonTransparent>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <PDFContainer>
            <Document
              options={options}
              file={PDF}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            {isPDFLoaded && (
              <div className="controls">
                <Button
                  variant="text"
                  onClick={() => {
                    setPageNumber((prevPageNumber) => {
                      if (prevPageNumber > 1) {
                        return prevPageNumber - 1
                      } else {
                        return prevPageNumber
                      }
                    })
                  }}
                  disabled={pageNumber === 1}
                >
                  <Typography variant="h4Bold" color="primary.main">
                    Previous Page
                  </Typography>
                </Button>
                <Typography variant="h4Bold" color="primary.main">
                  Page {pageNumber} of {numPages}
                </Typography>
                <Button
                  variant="text"
                  onClick={() => {
                    setPageNumber((prevPageNumber) => {
                      if (prevPageNumber < numPages!) {
                        return prevPageNumber + 1
                      } else {
                        return prevPageNumber
                      }
                    })
                  }}
                  disabled={pageNumber === numPages}
                >
                  <Typography variant="h4Bold" color="primary.main">
                    Next Page
                  </Typography>
                </Button>
              </div>
            )}
            <div className="close-container">
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>
          </PDFContainer>
        </Modal>
      </div>
    </AboutContainer>
  )
}

export default Component

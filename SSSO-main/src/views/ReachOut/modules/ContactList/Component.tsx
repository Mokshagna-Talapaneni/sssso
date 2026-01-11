import React from "react"
import { ContactListType } from "../../type"
import { ContactListContainer, CSVLinkButton, ReactUsCard } from "./styled"
import { Typography } from "@mui/material"

const Component: React.FC<ContactListType> = ({ csvData }: ContactListType) => {
  const csvDataRows = React.useMemo(() => {
    return csvData?.slice(4)
  }, [csvData])

  return (
    <ContactListContainer>
      <Typography variant="h1Bold" color="primary.main" textAlign={"center"}>
        Reach Us At
      </Typography>
      <Typography variant="h4Medium" color="primary.main" textAlign={"center"}>
        <CSVLinkButton data={csvData}>
          Download List of All Contacts
        </CSVLinkButton>
      </Typography>

      <div className="region-level">
        <div className="left-container">
          {"STATE LEVEL".split("")?.map((char) => (
            <Typography variant="h1Bold" color="primary.main">
              {!char?.trim() ? <>&nbsp;</> : char}
            </Typography>
          ))}
        </div>
        <div className="right-container">
          <div className="cards-container">
            {csvData
              ?.filter((data) => data[2]?.includes("STATE"))
              ?.map((data) => (
                <ReactUsCard>
                  <Typography variant="h3Bold" color="primary.main">
                    {data[1]?.toLowerCase?.()}
                  </Typography>
                  <Typography variant="h3Bold" color="primary.main">
                    {data[2]?.toLowerCase?.()}
                  </Typography>
                  <Typography variant="h3Bold" color="primary.main">
                    <a href={`tel:${data[3]?.split(/[\s-]/g)?.join?.("")}`}>
                      {data[3]?.toLowerCase?.()}
                    </a>
                  </Typography>
                </ReactUsCard>
              ))}
          </div>
        </div>
      </div>
      <div className="region-level">
        <div className="left-container left-container-2">
          {"DISTRICT LEVEL".split("")?.map((char) => (
            <Typography variant="h1Bold" color="primary.main">
              {!char?.trim() ? <>&nbsp;</> : char}
            </Typography>
          ))}
        </div>
        <div className="right-container">
          <div className="cards-container">
            {csvData
              ?.filter((data) => data[2]?.includes("DISTRICT"))
              ?.map((data) => (
                <ReactUsCard>
                  <Typography variant="h3Bold" color="primary.main">
                    {data[1]?.toLowerCase?.()}
                  </Typography>
                  <Typography variant="h3Bold" color="primary.main">
                    {data[2]?.toLowerCase?.()}
                  </Typography>
                  <Typography variant="h3Bold" color="primary.main">
                    <a href={`tel:${data[3]?.split(/[\s-]/g)?.join?.("")}`}>
                      {data[3]?.toLowerCase?.()}
                    </a>
                  </Typography>
                </ReactUsCard>
              ))}
          </div>
        </div>
      </div>
    </ContactListContainer>
  )
}

export default Component

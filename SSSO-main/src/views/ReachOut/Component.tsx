import { HeroArea } from "@components/HeroArea"
import React from "react"
import imgUrl from "@assets/image/compressed/landscape/2.webp"
import { ReachOutComponentTypes } from "./type"
import { ContactList } from "./modules/ContactList"
import { JoinUs } from "./modules/JoinUs"
import { Contact } from "./modules/Contact"

const Component: React.FC<ReachOutComponentTypes> = ({
  csvData
}: ReachOutComponentTypes) => {
  return (
    <React.Fragment>
      <HeroArea
        header="Sri Sathya Sai Seva Organisations"
        subheader="Reach Out to Us"
        imageUrl={imgUrl}
      />
      <Contact />
      <JoinUs />
      <ContactList csvData={csvData} />
    </React.Fragment>
  )
}

export default Component

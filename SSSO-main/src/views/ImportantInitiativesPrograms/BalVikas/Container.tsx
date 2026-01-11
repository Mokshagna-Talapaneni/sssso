import React from "react"
import { CommonStakeHolder } from "@components/Sections/commonStakeHolder"
import { CommonStatistics } from "@components/Sections/commonStatistics"
import { BalVikasStructure } from "@components/Sections/balVikasStructure"
import { CommonImpact } from "@components/Sections/commonImpact"
import { CommonOutcome } from "@components/Sections/commonOutcome"
import { CommonObjective } from "@components/Sections/commonObjective"
import {
  BAL_VIKAS_OBJECTIVE_FOOTER,
  BAL_VIKAS_OBJECTIVE_CONTENT,
  BAL_VIKAS_STAKEHOLDER_CONTENT,
  BAL_VIKAS_OUTCOME,
  BAL_VIKA_OUTCOME_TITLE,
  BAL_VIKAS_IMPACT_TITLE,
  BAL_VIKAS_IMPACT_CONTENT,
  BAL_VIKAS_STATISTICS,
  BAL_VIKAS_STATISTICS_TITLE,
  BAL_VIKAS_OUTCOME_IMG,
  BAL_VIKAS_OBJECTIVE_IMG
} from "@constants/ImportantInitiativesPrograms"

import ChildIcon from "@assets/svg/children.svg"
import Parent from "@assets/svg/parent.svg"
import Guru from "@assets/svg/guru.svg"
import Volunteer from "@assets/svg/volunteer.svg"
import balVikasImage from "@assets/image/srisathyasaibal-vikas.jpg"
import { HeroArea } from "@components/HeroArea"

const Container: React.FC = () => {
  const BAL_VIKAS_STAKEHOLDER = React.useMemo(() => {
    return [
      {
        img: <ChildIcon />,
        title: "Children"
      },
      {
        img: <Parent />,
        title: "Parents"
      },
      {
        img: <Guru />,
        title: "Gurus"
      },
      {
        img: <Volunteer />,
        title: "Volunteers"
      }
    ]
  }, [])
  return (
    <>
      <HeroArea
        header="Bal Vikas"
        subheader="The Divine Mission of Sathya Sai Baba"
        imageUrl={balVikasImage}
      />
      <CommonObjective
        img={BAL_VIKAS_OBJECTIVE_IMG}
        videoId="v4rKKlwrJY0"
        footer={BAL_VIKAS_OBJECTIVE_FOOTER}
        content={BAL_VIKAS_OBJECTIVE_CONTENT}
      />
      <CommonStakeHolder
        stakeholders={[...BAL_VIKAS_STAKEHOLDER]}
        content={BAL_VIKAS_STAKEHOLDER_CONTENT}
      />
      <BalVikasStructure />
      <CommonImpact
        title={BAL_VIKAS_IMPACT_TITLE}
        content={BAL_VIKAS_IMPACT_CONTENT}
      />
      {/* <CommonStatistics
        title={BAL_VIKAS_STATISTICS_TITLE}
        statistics={[...BAL_VIKAS_STATISTICS]}
      /> */}
      <CommonOutcome
        title={BAL_VIKA_OUTCOME_TITLE}
        outcomes={[...BAL_VIKAS_OUTCOME]}
        outcomeImg={[...BAL_VIKAS_OUTCOME_IMG]}
      />
    </>
  )
}

export default Container

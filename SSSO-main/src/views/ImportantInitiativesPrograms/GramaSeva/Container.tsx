import React from "react"
import { CommonStakeHolder } from "@components/Sections/commonStakeHolder"
import { CommonObjective } from "@components/Sections/commonObjective"
import { CommonOutcome } from "@components/Sections/commonOutcome"
import { CommonStatistics } from "@components/Sections/commonStatistics"
import { GramaSevaStructure } from "@components/Sections/gramaSevaStructure"
import {
  GRAMA_SEVA_OUTCOME,
  GRAMA_SEVA_STAKEHOLDER_CONTENT,
  GRAMA_SEVA_OUTCOME_TITLE,
  GRAMA_SEVA_OBJECTIVE_IMG,
  GRAMA_SEVA_OBJECTIVE_HEAD2,
  GRAMA_SEVA_OBJECTIVE_CONTENT,
  GRAMA_SEVA_STATISTICS,
  GRAMA_SEVA_OUTCOME_IMG
} from "@constants/ImportantInitiativesPrograms"
import Org from "@assets/svg/org.svg"
import Volunteer from "@assets/svg/volunteer.svg"
import Villagers from "@assets/svg/villagers.svg"
import Community from "@assets/svg/community.svg"
import Gov from "@assets/svg/government.svg"
import { HeroArea } from "@components/HeroArea"

const Container: React.FC = () => {
  const GRAMA_SEVA_STAKEHOLDER = React.useMemo(() => {
    return [
      {
        img: <Villagers />,
        title: "Villagers"
      },
      {
        img: <Volunteer />,
        title: "Volunteers"
      },
      {
        img: <Org />,
        title: "Organisation"
      },
      {
        img: <Community />,
        title: "Community"
      },
      {
        img: <Gov />,
        title: "Government"
      }
    ]
  }, [])
  return (
    <>
      <HeroArea
        header="Grama Seva"
        subheader="Making ‘Real India’ Self-reliant"
        imageUrl={GRAMA_SEVA_OBJECTIVE_IMG}
      />
      <CommonObjective
        img={GRAMA_SEVA_OBJECTIVE_IMG}
        head2={GRAMA_SEVA_OBJECTIVE_HEAD2}
        content={GRAMA_SEVA_OBJECTIVE_CONTENT}
      />
      <CommonStakeHolder
        stakeholders={[...GRAMA_SEVA_STAKEHOLDER]}
        content={GRAMA_SEVA_STAKEHOLDER_CONTENT}
      />
      <GramaSevaStructure />
      {/* <CommonStatistics
        statistics={GRAMA_SEVA_STATISTICS.map((stat) => ({ ...stat }))}
      /> */}
      <CommonOutcome
        title={GRAMA_SEVA_OUTCOME_TITLE}
        outcomes={[...GRAMA_SEVA_OUTCOME]}
        outcomeImg={[...GRAMA_SEVA_OUTCOME_IMG]}
      />
    </>
  )
}

export default Container

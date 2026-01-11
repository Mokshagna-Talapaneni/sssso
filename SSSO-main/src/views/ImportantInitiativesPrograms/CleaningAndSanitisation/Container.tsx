import React from "react"
import { CommonStakeHolder } from "@components/Sections/commonStakeHolder"
import { CommonObjective } from "@components/Sections/commonObjective"
import { CommonOutcome } from "@components/Sections/commonOutcome"
import { CommonStatistics } from "@components/Sections/commonStatistics"
import { CleaningStructure } from "@components/Sections/cleaningStructure"
import {
  CLEAN_SANITISATION_OUTCOME,
  CLEAN_SANITISATION_STAKEHOLDER_CONTENT,
  CLEAN_SANITISATION_OUTCOME_TITLE,
  CLEAN_SANITISATION_OBJECTIVE_IMG,
  CLEAN_SANITISATION_OBJECTIVE_HEAD2,
  CLEAN_SANITISATION_OBJECTIVE_CONTENT,
  CLEAN_SANITISATION_STATISTICS,
  CLEAN_SANITISATION_STATISTICS_TITLE,
  CLEAN_SANITISATION_OUTCOME_IMG
} from "@constants/ImportantInitiativesPrograms"
import CAS from "@assets/image/compressed/landscape/1.webp"
import Villagers from "@assets/svg/villagers.svg"
import Community from "@assets/svg/community.svg"
import Student from "@assets/svg/student.svg"
import { HeroArea } from "@components/HeroArea"

const Container: React.FC = () => {
  const CLEAN_SANITISATION_STAKEHOLDER = React.useMemo(() => {
    return [
      {
        img: <Villagers />,
        title: "Village Youth"
      },
      {
        img: <Community />,
        title: "Community"
      },
      {
        img: <Student />,
        title: "Students of SSSVJ Schools"
      }
    ]
  }, [])
  return (
    <>
      <HeroArea
        header="Swacchta Se Divyata Tak"
        subheader="Ensuring Purity To Attain Divinity."
        imageUrl={CAS}
      />
      <CommonObjective
        img={CLEAN_SANITISATION_OBJECTIVE_IMG}
        head2={CLEAN_SANITISATION_OBJECTIVE_HEAD2}
        content={CLEAN_SANITISATION_OBJECTIVE_CONTENT}
      />
      <CommonStakeHolder
        stakeholders={[...CLEAN_SANITISATION_STAKEHOLDER]}
        content={CLEAN_SANITISATION_STAKEHOLDER_CONTENT}
      />
      <CleaningStructure />
      {/* <CommonStatistics
        statistics={CLEAN_SANITISATION_STATISTICS.map((stat) => ({ ...stat }))}
        title={CLEAN_SANITISATION_STATISTICS_TITLE}
      /> */}
      <CommonOutcome
        title={CLEAN_SANITISATION_OUTCOME_TITLE}
        outcomes={[...CLEAN_SANITISATION_OUTCOME]}
        outcomeImg={[...CLEAN_SANITISATION_OUTCOME_IMG]}
      />
    </>
  )
}

export default Container

import React from "react"
import { CommonStakeHolder } from "@components/Sections/commonStakeHolder"
import { CommonObjective } from "@components/Sections/commonObjective"
import { CommonOutcome } from "@components/Sections/commonOutcome"
import { CommonStatistics } from "@components/Sections/commonStatistics"
import { SkillDevelopmentStructure } from "@components/Sections/skillDevelopmentStructure"
import {
  SKILL_DEVELOPMENT_OUTCOME,
  SKILL_DEVELOPMENT_OUTCOME_TITLE,
  SKILL_DEVELOPMENT_OBJECTIVE_IMG,
  SKILL_DEVELOPMENT_OBJECTIVE_HEAD2,
  SKILL_DEVELOPMENT_OBJECTIVE_CONTENT,
  SKILL_DEVELOPMEMT_STATISTICS,
  SKILL_DEVELOPMENT_STATISTICS_TITLE,
  SKILL_DEVELOPMENT_OUTCOME_IMG
} from "@constants/ImportantInitiativesPrograms"
import Volunteer from "@assets/svg/volunteer.svg"
import Villagers from "@assets/svg/villagers.svg"
import Org from "@assets/svg/org.svg"
import Gov from "@assets/svg/government.svg"
import SchoolManagement from "@assets/svg/schoolManagement.svg"
import { HeroArea } from "@components/HeroArea"

const Container: React.FC = () => {
  const SKILL_DEVELOPMENT_STAKEHOLDER = React.useMemo(() => {
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
        title: "organisation"
      },
      {
        img: <SchoolManagement />,
        title: "School"
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
        header="Skill Development"
        subheader="Endowing youth with skills for a brighter future"
        imageUrl={SKILL_DEVELOPMENT_OBJECTIVE_IMG}
      />
      <CommonObjective
        img={SKILL_DEVELOPMENT_OBJECTIVE_IMG}
        head2={SKILL_DEVELOPMENT_OBJECTIVE_HEAD2}
        content={SKILL_DEVELOPMENT_OBJECTIVE_CONTENT}
      />
      <CommonStakeHolder stakeholders={[...SKILL_DEVELOPMENT_STAKEHOLDER]} />
      <SkillDevelopmentStructure />
      {/* <CommonStatistics
        statistics={SKILL_DEVELOPMEMT_STATISTICS.map((stat) => ({ ...stat }))}
        title={SKILL_DEVELOPMENT_STATISTICS_TITLE}
      /> */}
      <CommonOutcome
        title={SKILL_DEVELOPMENT_OUTCOME_TITLE}
        outcomes={[...SKILL_DEVELOPMENT_OUTCOME]}
        outcomeImg={[...SKILL_DEVELOPMENT_OUTCOME_IMG]}
      />
    </>
  )
}

export default Container

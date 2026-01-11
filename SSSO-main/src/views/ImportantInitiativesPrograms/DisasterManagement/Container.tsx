import React from "react"
import { CommonStakeHolder } from "@components/Sections/commonStakeHolder"
import { CommonObjective } from "@components/Sections/commonObjective"
import { CommonOutcome } from "@components/Sections/commonOutcome"
import { CommonStatistics } from "@components/Sections/commonStatistics"
import { DisasterManagement } from "@components/Sections/disasterManagementStructure"
import {
  DISASTER_MANAGEMENT_OUTCOME,
  DISASTER_MANAGEMENT_OUTCOME_TITLE,
  DISASTER_MANAGEMENT_OBJECTIVE_IMG,
  DISASTER_MANAGEMENT_OBJECTIVE_HEAD2,
  DISASTER_MANAGEMENT_OBJECTIVE_CONTENT,
  DISASTER_MANAGEMENT_STATISTICS,
  DISASTER_MANAGEMENT_STATISTICS_TITLE,
  DISASTER_MANAGEMENT_OUTCOME_IMG
} from "@constants/ImportantInitiativesPrograms"

import Volunteer from "@assets/svg/volunteer.svg"
import Villagers from "@assets/svg/villagers.svg"
import Community from "@assets/svg/community.svg"
import Student from "@assets/svg/student.svg"
import { HeroArea } from "@components/HeroArea"

const Container: React.FC = () => {
  const DISASTER_MANAGEMENT_STAKEHOLDER = React.useMemo(() => {
    return [
      {
        img: <Volunteer />,
        title: "Members of Sri Sathya Sai Seva Organisations"
      },
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
        header="Disaster Management"
        subheader="Training volunteers to handle any disasters."
        imageUrl={DISASTER_MANAGEMENT_OBJECTIVE_IMG}
      />
      <CommonObjective
        img={DISASTER_MANAGEMENT_OBJECTIVE_IMG}
        head2={DISASTER_MANAGEMENT_OBJECTIVE_HEAD2}
        content={DISASTER_MANAGEMENT_OBJECTIVE_CONTENT}
      />
      <CommonStakeHolder stakeholders={[...DISASTER_MANAGEMENT_STAKEHOLDER]} />
      <DisasterManagement />
      {/* <CommonStatistics
        statistics={DISASTER_MANAGEMENT_STATISTICS.map((stat) => ({ ...stat }))}
        title={DISASTER_MANAGEMENT_STATISTICS_TITLE}
      /> */}
      <CommonOutcome
        title={DISASTER_MANAGEMENT_OUTCOME_TITLE}
        outcomes={[...DISASTER_MANAGEMENT_OUTCOME]}
        outcomeImg={[...DISASTER_MANAGEMENT_OUTCOME_IMG]}
      />
    </>
  )
}

export default Container

import React from "react"
import { CommonStakeHolder } from "../../../shared/components/Sections/commonStakeHolder"
import { CommonObjective } from "../../../shared/components/Sections/commonObjective"
import { CommonOutcome } from "../../../shared/components/Sections/commonOutcome"
import { CommonStatistics } from "../../../shared/components/Sections/commonStatistics"
import { VidyaJyothiStructure } from "../../../shared/components/Sections/vidyaJyothiStructure"
import {
  VIDYA_JYOTHI_OUTCOME,
  VIDYA_JYOTHI_STAKEHOLDER_CONTENT,
  VIDYA_JYOTHI_OUTCOME_TITLE,
  VIDYA_JYOTHI_OBJECTIVE_IMG,
  VIDYA_JYOTHI_OBJECTIVE_HEAD2,
  VIDYA_JYOTHI_OBJECTIVE_CONTENT,
  VIDYA_JYOTHI_STATISTICS,
  VIDYA_JYOTHI_STATISTICS_TITLE,
  VIDYA_JYOTHI_OUTCOME_IMG
} from "@constants/ImportantInitiativesPrograms"
import ChildIcon from "@assets/svg/children.svg"
import Parent from "@assets/svg/parent.svg"
import Guru from "@assets/svg/guru.svg"
import Volunteer from "@assets/svg/volunteer.svg"
import Villagers from "@assets/svg/villagers.svg"
import SchoolManagement from "@assets/svg/schoolManagement.svg"
import Gov from "@assets/svg/government.svg"
import { HeroArea } from "@components/HeroArea"

const Container: React.FC = () => {
  const VIDYA_JYOTHI_STAKEHOLDER = React.useMemo(() => {
    return [
      {
        img: <ChildIcon />,
        title: "Childrens"
      },
      {
        img: <Guru />,
        title: "Teachers"
      },
      {
        img: <Parent />,
        title: "Parents"
      },
      {
        img: <Villagers />,
        title: "Villagers"
      },
      {
        img: <Volunteer />,
        title: "Volunteers"
      },
      {
        img: <SchoolManagement />,
        title: "School Management"
      },
      {
        img: <Gov />,
        title: "Local Government"
      }
    ]
  }, [])
  return (
    <>
      <HeroArea
        header="Vidya Jyothi"
        subheader="Inspiring children by Empowering Schools"
        imageUrl={VIDYA_JYOTHI_OBJECTIVE_IMG}
      />
      <CommonObjective
        img={VIDYA_JYOTHI_OBJECTIVE_IMG}
        head2={VIDYA_JYOTHI_OBJECTIVE_HEAD2}
        content={VIDYA_JYOTHI_OBJECTIVE_CONTENT}
      />
      <CommonStakeHolder
        stakeholders={[...VIDYA_JYOTHI_STAKEHOLDER]}
        content={VIDYA_JYOTHI_STAKEHOLDER_CONTENT}
      />
      <VidyaJyothiStructure />
      {/* <CommonStatistics
        statistics={VIDYA_JYOTHI_STATISTICS.map((stat) => ({ ...stat }))}
        title={VIDYA_JYOTHI_STATISTICS_TITLE}
      /> */}
      <CommonOutcome
        title={VIDYA_JYOTHI_OUTCOME_TITLE}
        outcomes={[...VIDYA_JYOTHI_OUTCOME]}
        outcomeImg={[...VIDYA_JYOTHI_OUTCOME_IMG]}
      />
    </>
  )
}

export default Container

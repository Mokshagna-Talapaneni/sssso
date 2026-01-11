import React from "react"
import { Typography } from "@mui/material"
import { Container } from "./styled"

const Component: React.FC = () => {
  const structure = React.useMemo(
    () => [
      `The program is implemented over four phases viz. Energise, Empower, Equip and Evolve. Each of the phases has been designed to 
            enable meticulous implementation of the program. The ‘Energise’ phase attempts to create interest, enthusiasm and fervour 
            in students, teachers, school staff, parents and community.`,
      `‘Empower’ phase establishes the commitment of Sri Sathya Sai Seva Organisations to the school by improving the overall well 
            being of the children and implement programs that will enhance their capabilities, character and capacity. This stage 
            brings out the willingness, enthusiasm, participation and capability of the schools through the children, teachers and 
            parents.`,
      `The ‘Equip’ phase is on cost-intensive civil work like repairs to the ilapidated infrastructure,  the building of additional 
            classrooms, repairs to damaged floors or leaky roofs, construction of compound walls, whitewashing of walls etc. Thus the 
            physical condition and appearance  of the schools get transformed and there is the motivation for the students to attend 
            school.`,
      `In the ‘Evolve’ phase, the school is connected with the larger community by engaging the students in community competitions, 
            linking schools and implementing Government policy to meet deficiencies, if any.`
    ],
    []
  )

  return (
    <Container>
      <Typography variant="h1Bold">Structure</Typography>
      {structure.map((item, index) => (
        <Typography variant="h4" color="#555" key={index}>
          {item}
          <br />
          <br />
        </Typography>
      ))}
    </Container>
  )
}

export default Component

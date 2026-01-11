import React from "react"
import { InsigniaCard } from "./InsignCard"
import { Grid, Section } from "./styled"
import ISG1 from "@assets/image/insignia/emblem.jpg"
import ISG2 from "@assets/image/insignia/scarf.jpg"
import ISG3 from "@assets/image/insignia/flag.jpg"

export const InsigniasSection: React.FC = () => {
  const insignias = React.useMemo(
    () => [
      {
        title: "Emblem (Logo)",
        description:
          "The emblem of the organisation is known as the <b>Sarva Dharma Logo</b>, which stands for the <b>unity of all faiths</b> and the progress toward spiritual realisation. It is enclosed within five semicircles around the central circle, symbolizing the five major religions of humanity.",
        image: ISG1
      },
      {
        title: "Scarf and Badge",
        description:
          "The scarf and badge are the holy insignia of the organisation. They represent the <b>sacrifice and commitment</b> of its members. All members of the organisation should mandatorily wear the scarf and badge while participating in any of the organisation's activities — whether they are related to <b>service, education, or spiritual development.</b>",
        image: ISG2
      },
      {
        title: "Prashanthi Flag",
        description:
          "The Prashanthi Flag symbolizes the <b>victory over the inner negative forces</b> that drive us to commit evil deeds. It represents the triumph each individual must achieve over such demonic urges. As the official insignia of the organisation, the flag is hoisted before the commencement of any organisational event.",
        image: ISG3
      }
    ],
    []
  )

  return (
    <Section>
      <Grid>
        {insignias.map((insignia, index) => (
          <InsigniaCard key={index} {...insignia} />
        ))}
      </Grid>
    </Section>
  )
}

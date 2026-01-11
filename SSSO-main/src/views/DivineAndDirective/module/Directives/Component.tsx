import React from "react"
import { DirectiveCard } from "./DirectiveCard"
import { SectionContainer, ContentContainer, Grid } from "./styled"
import SparklesIcon from "@assets/svg/LucidIcons/sparkles.svg"
import { Typography } from "@mui/material"
import DC1 from "@assets/image/compressed/spiritual_wing/4.webp"
import DC2 from "@assets/image/compressed/spiritual_wing/1.webp"
import DC3 from "@assets/image/compressed/education_wing/2.webp"
import DC4 from "@assets/image/compressed/service_wing/3.webp"
import DC5 from "@assets/image/compressed/spiritual_wing/5.webp"
import DC6 from "@assets/image/compressed/education_wing/10.webp"
import DC7 from "@assets/image/compressed/education_wing/4.webp"
import DC8 from "@assets/image/compressed/spiritual_wing/7.webp"
import DC9 from "@assets/image/compressed/gram_seva/3.webp"

const DirectivesSection: React.FC = () => {
  return (
    <SectionContainer>
      <div className="header-container">
        <Typography variant="h1Bold" component={"div"} color="primary.main">
          Code of Conduct
        </Typography>
        <Typography variant="h4Medium" component={"div"}>
          There are <b>9 different Codes of Conduct</b> set by{" "}
          <b>Bhagawan Sri Sathya Sai Baba</b> himself. He stated that every
          member of the Organisation must undertake Sadhana as an integral part
          of their daily life and follow the 9-point Code of Conduct for
          self-transformation.
        </Typography>
      </div>
      <ContentContainer>
        <Grid>
          <DirectiveCard
            icon={<SparklesIcon />}
            imgUrl={DC1}
            title="Daily Meditation and Prayer"
            content="Bhagawan Sri Sathya Sai Baba said that our mind is like a “monkey mind” that constantly jumps from one thought to another. To control this “monkey mind” and attain spiritual peace, one must practice daily meditation, regardless of one’s religion. Swami placed meditation as the very first code of conduct for those who wish to see the divine within. Prayer reinforces meditation. Pray to whichever form of God you worship."
          />
          <DirectiveCard
            icon={<SparklesIcon />}
            imgUrl={DC2}
            title="Sing Bhajans or Devotional Songs with Family Members Once a Week"
            content="As times are changing, families are losing their bond and love for each other. One major reason is the lack of “Bhagawath Chintana” or “Nam Smarana” together. In earlier days, families used to eat, pray, and live together harmoniously. Swami lovingly explained that conducting family bhajans does not require His photo or specific form. If you are a Hindu, Christian, or Muslim, simply sing devotional songs to the form of God you worship. Even if others do not join, begin alone or with your immediate family. Leave the door open for others to hear and be inspired to join. Never force anyone—give them time. Fix a weekly date and time for family bhajans."
          />
          <DirectiveCard
            icon={<SparklesIcon />}
            imgUrl={DC3}
            title="Participation in Bal Vikas Programmes Organised by the Samithi"
            content="Everyone should learn the teachings provided in Bal Vikas classes, which include:<ul><li>Knowledge and practice of one’s own religion through chanting of songs, hymns, and prayers</li><li>Understanding and respect for other religions</li><li>Human values: respect for elders and parents, cleanliness, confidence, self-help, etc.</li><li>The life and message of Bhagawan Baba</li></ul>"
          />
          <DirectiveCard
            icon={<SparklesIcon />}
            imgUrl={DC4}
            title="Participation in Community Service Activities Organised by the Samithi or Organisation"
            content="Bhagawan Baba says, <b>“Service to man is service to God.”</b> True devotion is not limited to bhajans but includes embracing the 9-point Code of Conduct as a way of life. Every devotee should dedicate at least <b>4 hours per week</b> in service to the needy. As Bhagawan stated: <b>“Hands that help are holier than lips that pray.”</b> The Sai Organisation is a spiritual organisation with service at its core. Serve all with love and compassion."
          />
          <DirectiveCard
            icon={<SparklesIcon />}
            imgUrl={DC5}
            title="Attend Group Devotional Singing or Bhajans Organised by the Samithi at Least Once a Month"
            content="Bhagawan established this Organisation so individuals could pursue spiritual Sadhana with the support of the Sri Sathya Sai Seva Organisations. Bhajans are the foundation of Sadhana and of the Organisation itself. Singing bhajans removes negativity, cleanses the mind, and helps fight depression—common challenges faced by today’s youth. Keeping God’s name and message in the mind purifies it and brings lasting peace."
          />
          <DirectiveCard
            icon={<SparklesIcon />}
            imgUrl={DC6}
            title="Regular Study of Sai Literature"
            content="All devotees should study the life and teachings of Swami. Sai literature provides spiritual insight, awakening, and inspiration. Regular study does not mean reading alone—it includes participating in Study Circles organised by the Samithi to share and deepen understanding."
          />
          <DirectiveCard
            icon={<SparklesIcon />}
            imgUrl={DC7}
            title="Speak Softly and Lovingly to Everyone"
            content="The way we speak reflects our character. Our speech must be gentle and loving. We must ensure our words cause no harm. As Swami says, <b>“You may not always oblige, but you can always speak obligingly.”</b> Harsh words can leave scars that cannot be erased."
          />
          <DirectiveCard
            icon={<SparklesIcon />}
            imgUrl={DC8}
            title="Do Not Speak Ill of Others, Especially in Their Absence"
            content="Backbiting, character assassination, and falsehoods destroy our spiritual power and reputation. Speaking ill of others is like a deadly cancer that can undo all our good deeds. Always refrain from such behavior, especially in the absence of the person."
          />
          <DirectiveCard
            icon={<SparklesIcon />}
            imgUrl={DC9}
            title="Spiritual Practices"
            content="Put a ceiling on the misuse of these resources. This includes your personal energy as well as electricity, water, and other utilities. Take only as much food as you can consume. Use what is saved for the service of others. Utilize Savings for the Welfare of Others Bhagawan Baba says:<ul><li>Do not waste food</li><li>Do not waste energy</li><li>Do not waste money</li><li>Do not waste time</li></ul>"
          />
        </Grid>
      </ContentContainer>
    </SectionContainer>
  )
}

export default DirectivesSection

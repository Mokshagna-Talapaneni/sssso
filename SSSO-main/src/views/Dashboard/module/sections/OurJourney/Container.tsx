import React from "react"
import Component from "./Component"
import { NavConfig } from "@config/navigation/config"

const Container: React.FC = () => {
  const tabs = React.useRef({
    balVikas: {
      id: "bal-vikas",
      label: "Bal Vikas",
      heading: "Sri Sathya Sai Bal Vikas",
      desc: "Bal Vikas, also known as Sai Spiritual Education, serves as the foundation of a transformative movement aimed at restoring righteousness (dharma) in the world. This program is deeply rooted in the teachings of Sri Sathya Sai Baba and focuses on nurturing the inner values of children from a young age. The core objective is to cultivate a generation of children who grow up with a strong moral compass, a pure heart, and a clear conscience.\n\nRather than emphasizing only academic achievement, Bal Vikas promotes holistic development—balancing intellect, character, and spiritual awareness. Through storytelling, devotional singing, group activities, and value-based lessons, children are encouraged to practice truth (Sathya), righteousness (Dharma), peace (Shanthi), love (Prema), and nonviolence (Ahimsa) in their daily lives.\n\nBy instilling these values early, the program aims to develop responsible and compassionate individuals who will contribute to a just and harmonious society. These young minds, equipped with self-discipline and empathy, will grow into leaders and citizens who act with integrity and serve humanity selflessly. Ultimately, Bal Vikas is not just a teaching program—it is a movement to shape the future of the world through the transformation of the individual child.",
      knowMorePath:
        NavConfig["important-initiatives-and-programs"].children?.[0]?.path ||
        ""
    },
    objective: {
      id: "objective",
      label: "Objective",
      heading: "Our Objective",
      desc: "In a discourse on February 23, 1968, at Prasanthi Nilayam, Sri Sathya Sai Baba explained that the organisations named after him are not meant to promote his name or form a cult. Instead, they aim to foster spiritual growth through practices like japam (chanting God's name), dhyaanam (meditation), bhajan (devotional singing), and Naamasmarana (remembrance of God).\n\nThese activities cultivate inner peace and devotion. The organisations also emphasize seva (selfless service) to the needy, sick, and distressed, performed without expecting recognition or reward. Seva is considered a spiritual practice (saadhana), not a charitable act for the privileged. The Sri Sathya Sai Seva Organisations (SSSSO) is not religious or proselytizing. It encourages individuals to deepen their existing faiths, whether Hindu, Muslim, Christian, Sikh, or Buddhist, promoting unity among religions.\n\nThe organisation’s emblem reflects this unity, and spiritual leaders from various traditions have acknowledged Sai Baba’s profound understanding of their teachings. Membership is free, and the organisation operates through local Samithis and Bhajan Mandalis, uniting people from all backgrounds under the ideals of “Love All - Serve All” and “Help Ever - Hurt Never.” SSSSO functions through three interconnected wings—Spiritual, Educational, and Service—symbolizing Worship, Wisdom, and Work, all aimed at realizing the divine within.",
      knowMorePath: NavConfig["the-organisation"].children?.[0]?.path || ""
    },
    organisation: {
      id: "organisation",
      label: "Organisation Charter",
      heading: "Organisation Charter",
      desc: "The primary mission of the Sri Sathya Sai Seva Organisations, as envisioned by Bhagawan Sri Sathya Sai Baba, is to help individuals realize the Divinity inherent within themselves. This awakening is nurtured through the practice and promotion of five core human values: Sathya (Truth), Dharma (Righteousness), Shanthi (Peace), Prema (Love), and Ahimsa (Nonviolence). These values are not just ideals but essential pillars of a spiritual life, leading to inner transformation and the evolution of one’s character.\n\nMembers of the organisation, whether current or future, especially those holding leadership roles, are encouraged to lead a disciplined and spiritually focused life. Following a strict code of conduct in their personal sadhana (spiritual discipline) is vital for their own development and for fulfilling the divine mission of the organisation. The emphasis lies in living these values daily—with sincerity, humility, and dedication—so that the individual becomes a beacon of love, peace, and service.\n\nBy embodying these principles, members not only uplift themselves but also inspire and uplift society. Their role is crucial in creating a world rooted in spiritual awareness, compassion, and unity. This divine mission is a collective journey of transformation, driven by selfless love and purposeful action.\n\nJai Sairam.",
      knowMorePath: NavConfig["the-organisation"].children?.[4]?.path || ""
    }
  })

  const [currentView, setCurrentView] = React.useState("balVikas")

  const setView = React.useCallback(
    (id: string) => {
      setCurrentView(id)
    },
    [currentView, setCurrentView]
  )

  return (
    <Component
      tabConfig={tabs.current}
      currentView={currentView}
      setView={setView}
    />
  )
}

export default Container

import React from "react"
import { FullViewCarousel } from "@components/Carousel"
import SaiImage1 from "@assets/image/compressed/landscape/1.webp"
import SaiImage2 from "@assets/image/compressed/landscape/2.webp"
import SaiImage3 from "@assets/image/compressed/landscape/3.webp"
import SaiImage4 from "@assets/image/compressed/landscape/4.webp"
import SaiImage5 from "@assets/image/compressed/landscape/5.webp"
import SaiImage6 from "@assets/image/compressed/landscape/6.webp"

const Component: React.FC = () => {
  return (
    <FullViewCarousel
      slides={[
        {
          title: "Love All, Serve All.",
          description:
            "One should not discriminate but extend love and service to all beings, regardless of caste, creed, religion, or status.",
          image: SaiImage1
        },
        {
          title: "Help Ever, Hurt Never.",
          description:
            "Always be of help to others in any way you can, and never intentionally cause harm—physically, emotionally, or mentally. Compassion and kindness should guide your actions.",
          image: SaiImage2
        },
        {
          title: "There is only one religion, the religion of Love.",
          description:
            "All religions at their core teach love, compassion, and unity. This quote promotes religious harmony and emphasizes that love is the universal spiritual path.",
          image: SaiImage3
        },
        {
          title: "Hands that serve are holier than lips that pray.",
          description:
            "While prayer is important, selfless service is even more sacred. Putting spiritual principles into action through service is the highest form of devotion.",
          image: SaiImage4
        },
        {
          title: "Service to Man is Service to God.",
          description:
            "Serving Humanity Selflessly Reflects Divine Love, As Helping Others Fulfills Spiritual Purpose And Honors God.",
          image: SaiImage5
        },
        {
          title: "The end of education is character.",
          description:
            "A student or young adult receiving a diploma with a teacher smiling proudly beside them—set in a serene environment like a library or school—but with a glowing heart or aura around the student to symbolize inner values.",
          image: SaiImage6
        }
      ]}
    />
  )
}

export default Component

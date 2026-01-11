type NavItem = {
  id: string
  label: string
  path: string
  children?: Array<NavItem>
}

export const NavConfig: {
  [key: string]: NavItem
} = Object.freeze({
  home: {
    id: "home",
    label: "Sri Sathya Sai Baba",
    path: "/home"
  },
  "the-organisation": {
    id: "the-organisation",
    label: "The organisation",
    path: "/the-organisation",
    children: [
      {
        id: "the-organisation-about-us",
        label: "About Us",
        path: "/the-organisation/about-us"
      },
      {
        id: "the-organisation-wings-activities",
        label: "Wings & Activities",
        path: "/the-organisation/wings-and-activities"
      },
      {
        id: "the-organisation-divine-directives-guidelines",
        label: "Divine Directives & Guidelines",
        path: "/the-organisation/divine-directives-and-guidelines"
      },
      {
        id: "the-organisation-insignias",
        label: "Insignias",
        path: "/the-organisation/insignias"
      },
      {
        id: "the-organisation-units",
        label: "Units",
        path: "/the-organisation/units"
      }
    ]
  },
  "important-initiatives-and-programs": {
    id: "important-initiatives-and-programs",
    label: "Important Initiatives & Programs",
    path: "/important-initiatives-and-programs",
    children: [
      {
        id: "important-initiatives-and-programs-bal-vikas",
        label: "SSS Bal Vikas",
        path: "/important-initiatives-and-programs/bal-vikas"
      },
      {
        id: "important-initiatives-and-programs-vidya-jyothi",
        label: "SSS Vidya Jyothi",
        path: "/important-initiatives-and-programs/vidya-jyothi"
      },
      {
        id: "important-initiatives-and-programs-grama-seva",
        label: "Grama Seva",
        path: "/important-initiatives-and-programs/grama-seva"
      },
      {
        id: "important-initiatives-and-programs-disaster-management",
        label: "Disaster Management",
        path: "/important-initiatives-and-programs/disaster-management"
      },
      {
        id: "important-initiatives-and-programs-ceiling-on-desire",
        label: "Ceiling on Desire",
        path: "/important-initiatives-and-programs/ceiling-on-desire"
      },
      {
        id: "important-initiatives-and-programs-cleaning-and-sanitation",
        label: "Swacchta Se Divyata Tak",
        path: "/important-initiatives-and-programs/cleaning-and-sanitation"
      },
      {
        id: "important-initiatives-and-programs-skill-development",
        label: "SSS Skill Development",
        path: "/important-initiatives-and-programs/skill-development"
      },
      {
        id: "important-initiatives-and-programs-our-national-initiatives",
        label: "Our National Initiatives",
        path: "/important-initiatives-and-programs/our-national-initiatives"
      }
    ]
  },
  "the-essence": {
    id: "the-essence",
    label: "The Essence",
    path: "/the-essence"
  },
    blog: {
    id: "blog-updates",
    label: "Upcoming Activities",
    path: "/blog"
  },
  "reach-out-to-us": {
    id: "reach-out-to-us",
    label: "Reach Out to Us",
    path: "/reach-out-to-us"
  }
})
export type OurJourneyComponent = {
  tabConfig: {
    [key: string]: {
      id: string
      label: string
      heading: string
      desc: string
      knowMorePath: string
    }
  }
  currentView: string
  setView: (id: string) => void
}

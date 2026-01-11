declare module "*.png"
declare module "*.jpg"
declare module "*.svg" {
  const content: string
  export default content
}
declare module "*.webp" {
  const value: string
  export default value
}

declare module "@assets/csv/office_bearer.csv" {
  const value: string
  export default value
}

declare module "*.pdf" {
  const content: string
  export default content
}

import _ from "lodash"

export const addZeroPrefix = (num: number) => {
  if (!num || _.isNaN(num)) return "00"
  return num?.toString?.()?.length > 1 ? num : `0${num}`
}

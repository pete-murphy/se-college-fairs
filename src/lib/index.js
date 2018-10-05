export { visibilityFilter } from "./visibilityFilter"

export const deriveSchema = data => Object.keys(data[0])

export const removeTrailingNonLetters = str =>
  str.replace(/\W+$/g, _ => "")

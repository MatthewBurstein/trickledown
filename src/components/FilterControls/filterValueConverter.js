import { convertRangeToRange } from "../../synthesizer/controlValueConverter"
import {
  minRealRotaryValue,
  maxRealRotaryValue
} from "../RotaryControl/RotaryControl"

const minFilterValue = 20
const maxFilterValue = 20 * 1000

export const filterControlToEngine = rotaryValue => {
  return Math.exp(
    convertRangeToRange(
      rotaryValue,
      minRealRotaryValue,
      maxRealRotaryValue,
      Math.log(minFilterValue),
      Math.log(maxFilterValue)
    )
  )
}

export const filterEngineToControl = engineValue =>
  convertRangeToRange(
    Math.log(engineValue),
    Math.log(minFilterValue),
    Math.log(maxFilterValue),
    minRealRotaryValue,
    maxRealRotaryValue
  )

import { convertRangeToRange } from "../../synthesizer/controlValueConverter"
import {
  minRealRotaryValue,
  maxRealRotaryValue
} from "../RotaryControl/RotaryControl"

const minCutoffValue = 20
const maxCutoffValue = 20 * 1000

export const cutoffControlToEngine = rotaryValue => {
  return Math.exp(
    convertRangeToRange(
      rotaryValue,
      minRealRotaryValue,
      maxRealRotaryValue,
      Math.log(minCutoffValue),
      Math.log(maxCutoffValue)
    )
  )
}

export const cutoffEngineToControl = engineValue =>
  convertRangeToRange(
    Math.log(engineValue),
    Math.log(minCutoffValue),
    Math.log(maxCutoffValue),
    minRealRotaryValue,
    maxRealRotaryValue
  )

const minResonanceValue = 0.0001
const maxResonanceValue = 800

export const resonanceControlToEngine = rotaryValue =>
  convertRangeToRange(
    rotaryValue,
    minRealRotaryValue,
    maxRealRotaryValue,
    minResonanceValue,
    maxResonanceValue
  )

export const resonanceEngineToControl = engineValue =>
  convertRangeToRange(
    engineValue,
    minResonanceValue,
    maxResonanceValue,
    minRealRotaryValue,
    maxRealRotaryValue
  )

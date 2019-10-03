import { convertRangeToRange } from "../../synthesizer/controlValueConverter"
import {
  minUIRotaryValue,
  maxUIRotaryValue
} from "../RotaryControl/RotaryControl"

const minCutoffValue = 20
const maxCutoffValue = 20 * 1000

export const cutoffControlToEngine = rotaryValue =>
  Math.exp(
    convertRangeToRange(
      rotaryValue,
      minUIRotaryValue,
      maxUIRotaryValue,
      Math.log(minCutoffValue),
      Math.log(maxCutoffValue)
    )
  )

export const cutoffEngineToControl = engineValue =>
  convertRangeToRange(
    Math.log(engineValue),
    Math.log(minCutoffValue),
    Math.log(maxCutoffValue),
    minUIRotaryValue,
    maxUIRotaryValue
  )

const minResonanceValue = 0.0001
const maxResonanceValue = 800

export const resonanceControlToEngine = rotaryValue =>
  convertRangeToRange(
    rotaryValue,
    minUIRotaryValue,
    maxUIRotaryValue,
    minResonanceValue,
    maxResonanceValue
  )

export const resonanceEngineToControl = engineValue =>
  convertRangeToRange(
    engineValue,
    minResonanceValue,
    maxResonanceValue,
    minUIRotaryValue,
    maxUIRotaryValue
  )

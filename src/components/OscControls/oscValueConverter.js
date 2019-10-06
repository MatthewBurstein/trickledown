import { convertRangeToRange } from "../../synthesizer/controlValueConverter"
import {
  centeredMinUIRotaryValue,
  centeredMaxUIRotaryValue
} from "../RotaryControl/RotaryControl"

const minDetuneCents = -100
const maxDetuneCents = 100

export const detuneControlToEngine = rotaryValue =>
  convertRangeToRange(
    rotaryValue,
    centeredMinUIRotaryValue,
    centeredMaxUIRotaryValue,
    minDetuneCents,
    maxDetuneCents
  )

export const detuneEngineToControl = engineValue =>
  convertRangeToRange(
    engineValue,
    minDetuneCents,
    maxDetuneCents,
    centeredMinUIRotaryValue,
    centeredMaxUIRotaryValue
  )

import React from "react"
import {
  OscControlsContainer,
  OscControlsTitle
} from "./oscControlsStyledComponents"
import Switch from "../Switch/Switch"
import { initialValues } from "../../synthesizer/AudioEngine"
import { detuneEngineToControl } from "./oscValueConverter"
import RotaryControl from "../RotaryControl/RotaryControl"

export default ({ setWaveform, setDetune, title, oscNumber }) => {
  const initialDetune = detuneEngineToControl(
    initialValues.oscillators[oscNumber].detune
  )
  return (
    <OscControlsContainer>
      <OscControlsTitle>Osc {oscNumber + 1}</OscControlsTitle>
      <Switch
        options={["sine", "square", "triangle", "sawtooth"]}
        initialOption={initialValues.oscillators[oscNumber].type}
        effectValue={setWaveform}
      />
      <RotaryControl
        title="Detune"
        effectValue={setDetune}
        centered={true}
        initialValue={initialDetune}
      />
    </OscControlsContainer>
  )
}

import React from "react"
import {
  OscControlsContainer,
  OscControlsTitle
} from "./oscControlsStyledComponents"
import Switch from "../Switch/Switch"
import { initialValues } from "../../synthesizer/AudioEngine"
import { detuneEngineToControl } from "./oscValueConverter"
import RotaryControl from "../RotaryControl/RotaryControl"

const initialDetune = detuneEngineToControl(initialValues.osc.detune)

export default ({ setWaveform, setDetune, title }) => {
  return (
    <OscControlsContainer>
      <OscControlsTitle>{title}</OscControlsTitle>
      <Switch
        options={["sine", "square", "triangle", "sawtooth"]}
        initialOption={initialValues.osc.type}
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

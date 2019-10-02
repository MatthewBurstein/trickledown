import React from "react"
import {
  OscControlsContainer,
  OscControlsTitle
} from "./oscControlsStyledComponents"
import Switch from "../Switch/Switch"
import { initialValues } from "../../synthesizer/AudioEngine"
import RotaryControl from "../RotaryControl/RotaryControl"

export default ({ setWaveform, setDetune }) => {
  return (
    <OscControlsContainer>
      <OscControlsTitle>Oscillator</OscControlsTitle>
      <Switch
        options={["sine", "square", "triangle", "sawtooth"]}
        initialOption={initialValues.osc.type}
        effectValue={setWaveform}
      />
      <RotaryControl
        title="Detune"
        effectValue={setDetune}
        centered={true}
        initialValue={initialValues.osc.detune}
      />
    </OscControlsContainer>
  )
}

import React from "react"
import { OscControlsContainer } from "./oscControlsStyledComponents"
import Switch from "../Switch/Switch"
import { initialValues } from "../../synthesizer/AudioEngine"

export default ({ setWaveform }) => {
  return (
    <OscControlsContainer>
      <Switch
        title="Waveform"
        options={["sine", "square", "triangle", "sawtooth"]}
        initialOption={initialValues.osc.type}
        effectValue={setWaveform}
      />
    </OscControlsContainer>
  )
}

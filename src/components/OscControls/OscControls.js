import React from "react"
import { OscControlsContainer } from "./oscControlsStyledComponents"
import Switch from "../Switch/Switch"

export default ({ setWaveform }) => {
  return (
    <OscControlsContainer>
      <Switch
        title="Waveform"
        options={["sine", "square", "triangle", "sawtooth"]}
        initialOption={0}
        effectValue={setWaveform}
      />
    </OscControlsContainer>
  )
}

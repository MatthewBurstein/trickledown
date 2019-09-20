import React from "react"
import Envelope from "../Envelope/Envelope"
import {
  FilterControlsContainer,
  CutoffResonance
} from "./filterControlsStyledComponents"
import RotaryControl from "../RotaryControl/RotaryControl"
import { initialValues } from "../../synthesizer/AudioEngine"
import { filterEngineToControl } from "./filterValueConverter"

const initialValue = filterEngineToControl(initialValues.filter.frequency)

export default ({ setAttack, setDecay, setSustain, setRelease, setCutoff }) => {
  return (
    <FilterControlsContainer>
      <CutoffResonance>
        <RotaryControl
          effectValue={setCutoff}
          title="Cutoff"
          initialValue={initialValue}
        />
      </CutoffResonance>

      <Envelope
        title="Filter Env"
        setAttack={setAttack}
        setDecay={setDecay}
        setSustain={setSustain}
        setRelease={setRelease}
      />
    </FilterControlsContainer>
  )
}

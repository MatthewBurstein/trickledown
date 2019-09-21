import React from "react"
import Envelope from "../Envelope/Envelope"
import {
  FilterControlsContainer,
  CutoffResonance,
  FilterTitle
} from "./filterControlsStyledComponents"
import RotaryControl from "../RotaryControl/RotaryControl"
import { initialValues } from "../../synthesizer/AudioEngine"
import { cutoffEngineToControl } from "./filterValueConverter"

const initialCutoffValue = cutoffEngineToControl(initialValues.filter.frequency)
const initialResonanceValue = initialValues.filter.resonance

export default ({
  setCutoff,
  setResonance,
  setAttack,
  setDecay,
  setSustain,
  setRelease
}) => {
  return (
    <FilterControlsContainer>
      <FilterTitle>Filter</FilterTitle>
      <CutoffResonance>
        <RotaryControl
          effectValue={setCutoff}
          title="Cutoff"
          initialValue={initialCutoffValue}
        />
        <RotaryControl
          effectValue={setResonance}
          title="Resonance"
          initialValue={initialResonanceValue}
        />
      </CutoffResonance>

      <Envelope
        setAttack={setAttack}
        setDecay={setDecay}
        setSustain={setSustain}
        setRelease={setRelease}
      />
    </FilterControlsContainer>
  )
}

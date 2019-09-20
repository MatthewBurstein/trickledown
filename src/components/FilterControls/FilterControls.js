import React from "react"
import Envelope from "../Envelope/Envelope"
import {
  FilterControlsContainer,
  CutoffResonance
} from "./filterControlsStyledComponents"
import RotaryControl from "../RotaryControl/RotaryControl"

export default ({ setAttack, setDecay, setSustain, setRelease }) => {
  return (
    <FilterControlsContainer>
      <CutoffResonance>
        <RotaryControl effectValue={() => {}} title="Cutoff" />
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

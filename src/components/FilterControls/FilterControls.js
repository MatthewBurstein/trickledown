import React from "react"
import Envelope from "../Envelope/Envelope"
import { FilterControlsContainer } from "./filterControlsStyledComponents"

export default ({ setAttack, setDecay, setSustain, setRelease }) => {
  return (
    <FilterControlsContainer>
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

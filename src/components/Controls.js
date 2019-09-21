import React from "react"
import { Controls } from "./SynthLayout"
import AmpControls from "./AmpControls/AmpControls"
import FilterControls from "./FilterControls/FilterControls"

export default ({
  setCutoff,
  setResonance,
  setAmpAttack,
  setAmpDecay,
  setAmpSustain,
  setAmpRelease
}) => {
  return (
    <Controls>
      <AmpControls
        setAmpAttack={setAmpAttack}
        setAmpDecay={setAmpDecay}
        setAmpSustain={setAmpSustain}
        setAmpRelease={setAmpRelease}
      />
      <FilterControls setCutoff={setCutoff} setResonance={setResonance} />
    </Controls>
  )
}

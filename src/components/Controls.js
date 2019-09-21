import React from "react"
import { Controls } from "./SynthLayout"
import AmpControls from "./AmpControls/AmpControls"
import FilterControls from "./FilterControls/FilterControls"

export default ({ setCutoff, setResonance, setAmpEnv, setFilterEnv }) => {
  return (
    <Controls>
      <AmpControls setEnv={setAmpEnv} />
      <FilterControls
        setCutoff={setCutoff}
        setResonance={setResonance}
        setEnv={setFilterEnv}
      />
    </Controls>
  )
}

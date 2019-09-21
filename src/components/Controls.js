import React from "react"
import { Controls } from "./SynthLayout"
import AmpControls from "./AmpControls/AmpControls"
import FilterControls from "./FilterControls/FilterControls"
import Switch from "./Switch/Switch"

export default ({ setCutoff, setResonance, setAmpEnv, setFilterEnv }) => {
  return (
    <Controls>
      <AmpControls setEnv={setAmpEnv} />
      <FilterControls
        setCutoff={setCutoff}
        setResonance={setResonance}
        setEnv={setFilterEnv}
      />
      <Switch labels={["sine", "square", "triangle", "noise"]} />
    </Controls>
  )
}

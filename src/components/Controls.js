import React from "react"
import { Controls } from "./SynthLayout"
import AmpControls from "./AmpControls/AmpControls"
import OscControls from "./OscControls/OscControls"
import FilterControls from "./FilterControls/FilterControls"

export default ({
  setWaveform,
  setCutoff,
  setResonance,
  setAmpEnv,
  setFilterEnv
}) => {
  return (
    <Controls>
      <OscControls setWaveform={setWaveform} />
      <AmpControls setEnv={setAmpEnv} />
      <FilterControls
        setCutoff={setCutoff}
        setResonance={setResonance}
        setEnv={setFilterEnv}
      />
    </Controls>
  )
}

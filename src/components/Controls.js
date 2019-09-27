import React from "react"
import { Controls } from "./SynthLayout"
import AmpControls from "./AmpControls/AmpControls"
import OscControls from "./OscControls/OscControls"
import FilterControls from "./FilterControls/FilterControls"

export default ({
  setWaveform,
  setDetune,
  setCutoff,
  setResonance,
  setAmpEnv,
  setFilterEnv
}) => {
  return (
    <Controls>
      <OscControls setWaveform={setWaveform} setDetune={setDetune} />
      <AmpControls setEnv={setAmpEnv} />
      <FilterControls
        setCutoff={setCutoff}
        setResonance={setResonance}
        setEnv={setFilterEnv}
      />
    </Controls>
  )
}

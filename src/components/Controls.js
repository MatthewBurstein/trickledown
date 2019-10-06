import React from "react"
import { Controls } from "./SynthLayout"
import AmpControls from "./AmpControls/AmpControls"
import OscControls from "./OscControls/OscControls"
import FilterControls from "./FilterControls/FilterControls"

export default ({
  setWaveform1,
  setDetune1,
  setCutoff,
  setResonance,
  setAmpEnv,
  setFilterEnv
}) => {
  return (
    <Controls>
      <OscControls
        title={"Osc 1"}
        setWaveform={setWaveform1}
        setDetune={setDetune1}
      />
      <OscControls
        title={"Osc 2"}
        setWaveform={setWaveform1}
        setDetune={setDetune1}
      />
      <AmpControls setEnv={setAmpEnv} />
      <FilterControls
        setCutoff={setCutoff}
        setResonance={setResonance}
        setEnv={setFilterEnv}
      />
    </Controls>
  )
}

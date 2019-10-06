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
      <OscControls
        oscNumber={0}
        setWaveform={setWaveform(0)}
        setDetune={setDetune(0)}
      />
      <OscControls
        oscNumber={1}
        setWaveform={setWaveform(1)}
        setDetune={setDetune(1)}
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

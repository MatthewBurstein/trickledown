import React from "react"
import { Controls } from "./SynthLayout"
import Envelope from "./Envelope/Envelope"

export default ({
  setAmpAttack,
  setAmpDecay,
  setAmpSustain,
  setAmpRelease
}) => {
  return (
    <Controls>
      <Envelope
        title="Amp Env"
        setAttack={setAmpAttack}
        setDecay={setAmpDecay}
        setSustain={setAmpSustain}
        setRelease={setAmpRelease}
      />
    </Controls>
  )
}

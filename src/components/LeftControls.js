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
        setAmpAttack={setAmpAttack}
        setAmpDecay={setAmpDecay}
        setAmpSustain={setAmpSustain}
        setAmpRelease={setAmpRelease}
      />
    </Controls>
  )
}

import React from "react"
import { Controls } from "./SynthLayout"
import Envelope from "./Envelope/Envelope"

export default ({ setAmpAttack }) => {
  return (
    <Controls>
      <Envelope setAmpAttack={setAmpAttack} />
    </Controls>
  )
}

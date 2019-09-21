import React from "react"
import Envelope from "../Envelope/Envelope"
import { AmpControlsContainer } from "./ampControlsStyledComponents"
import { initialValues } from "../../synthesizer/AudioEngine"

export default ({
  setAmpAttack,
  setAmpDecay,
  setAmpSustain,
  setAmpRelease
}) => {
  return (
    <AmpControlsContainer>
      <Envelope
        title="Amp Env"
        setAttack={setAmpAttack}
        setDecay={setAmpDecay}
        setSustain={setAmpSustain}
        setRelease={setAmpRelease}
        initialValues={initialValues.amp}
      />
    </AmpControlsContainer>
  )
}

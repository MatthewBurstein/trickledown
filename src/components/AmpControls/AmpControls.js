import React from "react"
import Envelope from "../Envelope/Envelope"
import { AmpControlsContainer } from "./ampControlsStyledComponents"
import { initialValues } from "../../synthesizer/AudioEngine"

export default ({ setEnv }) => {
  return (
    <AmpControlsContainer>
      <Envelope
        title="Amp Env"
        setValue={setEnv}
        initialValues={initialValues.amp}
      />
    </AmpControlsContainer>
  )
}

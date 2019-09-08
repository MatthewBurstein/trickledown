import React from "react"
import LinerControl from "../LinearControl/LinearControl"
import { EnvelopeContainer } from "./envelopeStyledComponents"
import { initialValues } from "../../synthesizer/AudioEngine"
import { envelopeToControl } from "../../synthesizer/controlValueConverter"

export default ({
  setAmpAttack,
  setAmpDecay,
  setAmpSustain,
  setAmpRelease
}) => {
  return (
    <EnvelopeContainer>
      <LinerControl
        effectValue={setAmpAttack}
        initialValue={envelopeToControl(initialValues.ampEnv.attack)}
        label="A"
      />
      <LinerControl
        effectValue={setAmpDecay}
        initialValue={envelopeToControl(initialValues.ampEnv.decay)}
        label="D"
      />
      <LinerControl
        effectValue={setAmpSustain}
        initialValue={envelopeToControl(initialValues.ampEnv.sustain)}
        label="S"
      />
      <LinerControl
        effectValue={setAmpRelease}
        initialValue={envelopeToControl(initialValues.ampEnv.release)}
        label="R"
      />
    </EnvelopeContainer>
  )
}

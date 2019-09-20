import React from "react"
import LinerControl from "../LinearControl/LinearControl"
import {
  EnvelopeContainer,
  EnvelopeTitle,
  EnvelopeControlContainer
} from "./envelopeStyledComponents"
import { initialValues } from "../../synthesizer/AudioEngine"
import { envelopeToControl } from "../../synthesizer/controlValueConverter"

export default ({ title, setAttack, setDecay, setSustain, setRelease }) => {
  return (
    <EnvelopeContainer>
      <EnvelopeTitle>{title}</EnvelopeTitle>
      <EnvelopeControlContainer>
        <LinerControl
          effectValue={setAttack}
          initialValue={envelopeToControl(initialValues.ampEnv.attack)}
          label="A"
        />
        <LinerControl
          effectValue={setDecay}
          initialValue={envelopeToControl(initialValues.ampEnv.decay)}
          label="D"
        />
        <LinerControl
          effectValue={setSustain}
          initialValue={envelopeToControl(initialValues.ampEnv.sustain)}
          label="S"
        />
        <LinerControl
          effectValue={setRelease}
          initialValue={envelopeToControl(initialValues.ampEnv.release)}
          label="R"
        />
      </EnvelopeControlContainer>
    </EnvelopeContainer>
  )
}

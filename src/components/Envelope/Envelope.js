import React from "react"
import LinearControl from "../LinearControl/LinearControl"
import {
  EnvelopeContainer,
  EnvelopeTitle,
  EnvelopeControlContainer
} from "./envelopeStyledComponents"
import { initialValues } from "../../synthesizer/AudioEngine"
import { envelopeToControl } from "./envelopeValueConverter"

export default ({ title, setAttack, setDecay, setSustain, setRelease }) => {
  return (
    <EnvelopeContainer>
      <EnvelopeTitle>{title}</EnvelopeTitle>
      <EnvelopeControlContainer>
        <LinearControl
          effectValue={setAttack}
          initialValue={envelopeToControl(initialValues.amp.attack)}
          label="A"
        />
        <LinearControl
          effectValue={setDecay}
          initialValue={envelopeToControl(initialValues.amp.decay)}
          label="D"
        />
        <LinearControl
          effectValue={setSustain}
          initialValue={envelopeToControl(initialValues.amp.sustain)}
          label="S"
        />
        <LinearControl
          effectValue={setRelease}
          initialValue={envelopeToControl(initialValues.amp.release)}
          label="R"
        />
      </EnvelopeControlContainer>
    </EnvelopeContainer>
  )
}

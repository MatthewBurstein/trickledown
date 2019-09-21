import React from "react"
import LinearControl from "../LinearControl/LinearControl"
import {
  EnvelopeContainer,
  EnvelopeTitle,
  EnvelopeControlContainer
} from "./envelopeStyledComponents"
import { envelopeToControl } from "./envelopeValueConverter"

export default ({ title, setValue, initialValues }) => {
  return (
    <EnvelopeContainer>
      {title && <EnvelopeTitle>{title}</EnvelopeTitle>}
      <EnvelopeControlContainer>
        <LinearControl
          effectValue={setValue("attack")}
          initialValue={envelopeToControl(initialValues.attack)}
          label="A"
        />
        <LinearControl
          effectValue={setValue("decay")}
          initialValue={envelopeToControl(initialValues.decay)}
          label="D"
        />
        <LinearControl
          effectValue={setValue("sustain")}
          initialValue={envelopeToControl(initialValues.sustain)}
          label="S"
        />
        <LinearControl
          effectValue={setValue("release")}
          initialValue={envelopeToControl(initialValues.release)}
          label="R"
        />
      </EnvelopeControlContainer>
    </EnvelopeContainer>
  )
}

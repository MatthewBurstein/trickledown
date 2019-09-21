import React from "react"
import LinearControl from "../LinearControl/LinearControl"
import {
  EnvelopeContainer,
  EnvelopeTitle,
  EnvelopeControlContainer
} from "./envelopeStyledComponents"
import { envelopeToControl } from "./envelopeValueConverter"

const parameters = [
  { name: "attack", label: "A" },
  { name: "decay", label: "D" },
  { name: "sustain", label: "S" },
  { name: "release", label: "R" }
]

export default ({ title, setValue, initialValues }) => {
  return (
    <EnvelopeContainer>
      {title && <EnvelopeTitle>{title}</EnvelopeTitle>}
      <EnvelopeControlContainer>
        {parameters.map(({ name, label }) => (
          <LinearControl
            key={name}
            effectValue={setValue(name)}
            initialValue={envelopeToControl(initialValues[name])}
            label={label}
          />
        ))}
      </EnvelopeControlContainer>
    </EnvelopeContainer>
  )
}

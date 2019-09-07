import React from "react"
import LinerControl from "../LinearControl/LinearControl"
import { EnvelopeContainer } from "./envelopeStyledComponents"

export default () => {
  return (
    <EnvelopeContainer>
      <LinerControl label="A" />
      <LinerControl label="D" />
      <LinerControl label="S" />
      <LinerControl label="R" />
    </EnvelopeContainer>
  )
}

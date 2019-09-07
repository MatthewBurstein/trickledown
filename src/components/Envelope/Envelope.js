import React from "react"
import LinerControl from "../LinearControl/LinearControl"
import { EnvelopeContainer } from "./envelopeStyledComponents"

export default () => {
  return (
    <EnvelopeContainer>
      <LinerControl />
      <span>A</span>
      <LinerControl />
      <span>D</span>
      <LinerControl />
      <span>S</span>
      <LinerControl />
      <span>R</span>
    </EnvelopeContainer>
  )
}

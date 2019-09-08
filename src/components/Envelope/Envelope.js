import React from "react"
import LinerControl from "../LinearControl/LinearControl"
import { EnvelopeContainer } from "./envelopeStyledComponents"

export default ({ setAmpAttack }) => {
  return (
    <EnvelopeContainer>
      <LinerControl effectValue={setAmpAttack} label="A" />
      <LinerControl label="D" />
      <LinerControl label="S" />
      <LinerControl label="R" />
    </EnvelopeContainer>
  )
}

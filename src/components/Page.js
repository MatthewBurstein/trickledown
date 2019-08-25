import React from "react"
import { AppContainer, SynthContainer } from "./AppLayoutComponents"
import Synth from "./Synth"

export default () => {
  return (
    <AppContainer>
      <SynthContainer>
        <Synth />
      </SynthContainer>
    </AppContainer>
  )
}

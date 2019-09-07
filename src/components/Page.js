import React from "react"
import { AppContainer, SynthContainer } from "./AppLayoutComponents"
import Synth from "./Synth"
import LinearControl from "./LinearControl/LinearControl"

export default () => {
  return (
    <AppContainer>
      <SynthContainer>
        <Synth />
      </SynthContainer>
      <LinearControl />
    </AppContainer>
  )
}

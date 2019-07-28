import React from 'react'
import {
  AppContainer,
  KeyboardContainer
} from './AppLayoutComponents'
import Keyboard from './Keyboard'

export default () => {
  return(
    <AppContainer>
      <KeyboardContainer>
        <Keyboard />
      </KeyboardContainer>
    </AppContainer>
  )
}


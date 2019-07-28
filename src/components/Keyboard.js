import React from 'react'
import Octave from './Octave'
import { HangingCKey } from './Keys'


export default () => {
  return (
    <div>
      <Octave number={0}/>
      <Octave number={1}/>
      <HangingCKey octave={1}>C</HangingCKey>
    </div>
  )
}
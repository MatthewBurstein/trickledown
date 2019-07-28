import React from 'react'
import Octave from './Octave'
import { HangingCKey } from './Keys'


export default () => {
  const playNote = (key, octave) => {
    console.log('key: ', key)
    console.log('octave: ', octave)
  }

  return (
    <div>
      <Octave playNote={playNote} number={0}/>
      <Octave playNote={playNote} number={1}/>
      <HangingCKey octave={1}>C</HangingCKey>
    </div>
  )
}
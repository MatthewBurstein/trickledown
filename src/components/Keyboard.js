import React, { useRef } from 'react'
import AudioEngine from '../synthesizer/AudioEngine'
import Octave from './Octave'
import { EntireKeyboard } from './Keys'


export default () => {
  const audioEngine = useRef(new AudioEngine())

  const playNote = (key, octave) => {
    const realOctave = octave + 4
    audioEngine.current.play(key + realOctave)
  }

  return (
    <EntireKeyboard octaveNumber={2}>
      <Octave playNote={playNote} number={0}/>
      <Octave playNote={playNote} number={1} isLast={true}/>
    </EntireKeyboard>
  )
}
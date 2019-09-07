import React, { useRef } from "react"
import AudioEngine from "../synthesizer/AudioEngine"
import Octave from "./Keyboard/Octave"
import { Keyboard } from "./Keyboard/Keys"
import LeftControls from "./LeftControls"
import { EntireSynth, Controls } from "./SynthLayout"
import RotaryKnob from "./RotaryControl/RotaryKnob"

export default () => {
  const audioEngine = useRef(new AudioEngine())

  const playNote = (key, octave) => {
    const realOctave = octave + 4
    audioEngine.current.play(key + realOctave)
  }

  return (
    <EntireSynth>
      <LeftControls />
      <Keyboard octaveNumber={2}>
        <Octave playNote={playNote} number={0} />
        <Octave playNote={playNote} number={1} isLast={true} />
      </Keyboard>
      <Controls />
      <RotaryKnob />
    </EntireSynth>
  )
}

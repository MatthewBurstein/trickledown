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
    audioEngine.current.keyDown(key + realOctave)
  }

  const stopNote = (key, octave) => {
    const realOctave = octave + 4
    audioEngine.current.keyUp(key + realOctave)
  }

  const setAmpAttack = value => {
    const engineValue = value > 0 ? value / 10 : 0
    audioEngine.current.setAmpAttack(engineValue)
  }

  return (
    <EntireSynth>
      <LeftControls setAmpAttack={setAmpAttack} />
      <Keyboard octaveNumber={2}>
        <Octave playNote={playNote} stopNote={stopNote} number={0} />
        <Octave
          playNote={playNote}
          stopNote={stopNote}
          number={1}
          isLast={true}
        />
      </Keyboard>
      <Controls />
      <RotaryKnob />
    </EntireSynth>
  )
}

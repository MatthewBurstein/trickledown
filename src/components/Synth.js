import React, { useRef } from "react"
import AudioEngine from "../synthesizer/AudioEngine"
import Octave from "./Keyboard/Octave"
import { Keyboard } from "./Keyboard/Keys"
import Controls from "./Controls"
import { controlToEnvelope } from "../synthesizer/controlValueConverter"
import { EntireSynth } from "./SynthLayout"
import RotaryControl from "./RotaryControl/RotaryControl"

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
    const engineValue = controlToEnvelope(value)
    audioEngine.current.setAmpEnv("attack", engineValue)
  }

  const setAmpDecay = value => {
    const engineValue = controlToEnvelope(value)
    audioEngine.current.setAmpEnv("decay", engineValue)
  }

  const setAmpSustain = value => {
    const engineValue = controlToEnvelope(value)
    audioEngine.current.setAmpEnv("sustain", engineValue)
  }

  const setAmpRelease = value => {
    const engineValue = controlToEnvelope(value)
    audioEngine.current.setAmpEnv("release", engineValue)
  }

  return (
    <EntireSynth>
      <Controls
        setAmpAttack={setAmpAttack}
        setAmpDecay={setAmpDecay}
        setAmpSustain={setAmpSustain}
        setAmpRelease={setAmpRelease}
      />
      <Keyboard octaveNumber={2}>
        <Octave playNote={playNote} stopNote={stopNote} number={0} />
        <Octave
          playNote={playNote}
          stopNote={stopNote}
          number={1}
          isLast={true}
        />
      </Keyboard>
      <RotaryControl />
    </EntireSynth>
  )
}

import React, { useRef } from "react"
import AudioEngine from "../synthesizer/AudioEngine"
import Octave from "./Keyboard/Octave"
import { Keyboard } from "./Keyboard/Keys"
import Controls from "./Controls"
import { controlToEnvelope } from "./Envelope/envelopeValueConverter"
import { cutoffControlToEngine } from "./FilterControls/filterValueConverter"
import { SynthUI } from "./SynthLayout"

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

  const setFilterEnv = property => {
    return value => {
      const engineValue = controlToEnvelope(value)
      audioEngine.current.setFilterEnv(property, engineValue)
    }
  }

  const setCutoff = value => {
    const engineValue = cutoffControlToEngine(value)
    audioEngine.current.setCutoff(engineValue)
  }
  const setResonance = value => {
    audioEngine.current.setResonance(value)
  }

  return (
    <SynthUI>
      <Controls
        setFilterEnv={setFilterEnv}
        setAmpAttack={setAmpAttack}
        setAmpDecay={setAmpDecay}
        setAmpSustain={setAmpSustain}
        setAmpRelease={setAmpRelease}
        setCutoff={setCutoff}
        setResonance={setResonance}
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
    </SynthUI>
  )
}

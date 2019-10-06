import React, { useRef } from "react"
import AudioEngine from "../synthesizer/AudioEngine"
import Octave from "./Keyboard/Octave"
import { Keyboard } from "./Keyboard/Keys"
import Controls from "./Controls"
import { controlToEngine } from "./Envelope/envelopeValueConverter"
import { cutoffControlToEngine } from "./FilterControls/filterValueConverter"
import { detuneControlToEngine } from "./OscControls/oscValueConverter"
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

  const setAmpEnv = property => {
    return value =>
      audioEngine.current.setAmpEnv(property, controlToEngine[property](value))
  }

  const setFilterEnv = property => {
    return value =>
      audioEngine.current.setFilterEnv(
        property,
        controlToEngine[property](value)
      )
  }

  const setCutoff = value => {
    const engineValue = cutoffControlToEngine(value)
    audioEngine.current.setCutoff(engineValue)
  }

  const setResonance = value => audioEngine.current.setResonance(value)

  const setWaveform1 = waveform => audioEngine.current.setWaveform1(waveform)

  const setDetune1 = value => {
    const cents = detuneControlToEngine(value)
    audioEngine.current.setDetune1(cents)
  }

  return (
    <SynthUI>
      <Controls
        setFilterEnv={setFilterEnv}
        setAmpEnv={setAmpEnv}
        setCutoff={setCutoff}
        setResonance={setResonance}
        setWaveform1={setWaveform1}
        setDetune1={setDetune1}
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

import React, { useRef } from "react"
import AudioEngine from "../synthesizer/AudioEngine"
import Keyboard from "./Keyboard/Keyboard"
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

  const setWaveform = oscillatorNumber => {
    return waveform =>
      audioEngine.current.setWaveform(oscillatorNumber, waveform)
  }

  const setDetune = oscillatorNumber => {
    return value => {
      const cents = detuneControlToEngine(value)
      audioEngine.current.setDetune(oscillatorNumber, cents)
    }
  }

  return (
    <SynthUI>
      <Controls
        setFilterEnv={setFilterEnv}
        setAmpEnv={setAmpEnv}
        setCutoff={setCutoff}
        setResonance={setResonance}
        setWaveform={setWaveform}
        setDetune={setDetune}
      />
      <Keyboard stopNote={stopNote} playNote={playNote} />
    </SynthUI>
  )
}

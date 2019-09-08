import Tone from "tone"

class AudioEngine {
  constructor() {
    this.ampEnv = new Tone.AmplitudeEnvelope(initialValues.ampEnv)
    this.synth = new Tone.PolySynth(4, Tone.Synth)
    this.synth.chain(this.ampEnv, Tone.Master)
  }

  keyDown(note, octave) {
    this.synth.triggerAttack(note + octave)
    this.ampEnv.triggerAttack()
  }

  keyUp(note, octave) {
    this.synth.triggerRelease(note + octave)
    this.ampEnv.triggerRelease()
  }

  setAmpAttack(value) {
    this.ampEnv.attack = value
  }
  setAmpDecay(value) {
    this.ampEnv.decay = value
  }
  setAmpSustain(value) {
    this.ampEnv.sustain = value
  }
  setAmpRelease(value) {
    this.ampEnv.release = value
  }
}

export default AudioEngine

export const initialValues = {
  ampEnv: {
    attack: 0.3,
    decay: 6,
    sustain: 4.5,
    release: 0.8
  }
}

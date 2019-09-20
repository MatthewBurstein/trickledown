import Tone from "tone"

class AudioEngine {
  constructor() {
    this.osc = new Tone.Oscillator().start()
    this.ampEnv = new Tone.AmplitudeEnvelope(initialValues.ampEnv)
    this.osc.chain(this.ampEnv, Tone.Master)
  }

  keyDown(note, octave) {
    this.ampEnv.triggerAttack()
  }

  keyUp(note, octave) {
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

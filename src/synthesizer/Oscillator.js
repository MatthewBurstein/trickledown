import Tone from "tone"

export default class Oscillator {
  constructor(note, ampEnvConfig) {
    this.osc = new Tone.Oscillator(note).start()
    this.ampEnv = new Tone.AmplitudeEnvelope(ampEnvConfig)
    this.osc.chain(this.ampEnv, Tone.Master)
  }

  play() {
    this.ampEnv.triggerAttack()
  }

  stop() {
    this.ampEnv.triggerRelease()
  }

  setAmpEnv(property, value) {
    this.ampEnv[property] = value
  }
}

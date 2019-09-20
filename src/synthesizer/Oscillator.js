import Tone from "tone"
import Filter from "./Filter"

export default class Oscillator {
  constructor(note, ampEnvConfig) {
    this.osc = new Tone.Oscillator(note, "sawtooth").start()
    this.ampEnv = new Tone.AmplitudeEnvelope(ampEnvConfig)
    this.filter = new Filter()
    this.osc.chain(this.ampEnv, this.filter.getFilter(), Tone.Master)
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

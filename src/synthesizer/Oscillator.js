import Tone from "tone"
import Filter from "./Filter"

export default class Oscillator {
  constructor(note, config) {
    this.osc = new Tone.Oscillator(note, "sawtooth").start()
    this.ampEnv = new Tone.AmplitudeEnvelope(config.amp)
    this.filter = new Filter(config.filter)
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

  setCutoff(value) {
    this.filter.setCutoff(value)
  }
}

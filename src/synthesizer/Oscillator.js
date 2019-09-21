import Tone from "tone"

export default class Oscillator {
  constructor(note, config) {
    this.osc = new Tone.Oscillator(note, "sawtooth").start()
    this.ampEnv = new Tone.AmplitudeEnvelope(config.amp)
    this.filter = new Tone.Filter(config.filter.frequency)
    this.setResonance(config.filter.resonance)
    this.osc.chain(this.filter, this.ampEnv, Tone.Master)
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
    this.filter.frequency.value = value
  }

  setResonance(value) {
    console.log("in here")
    this.filter.Q.value = value
  }
}

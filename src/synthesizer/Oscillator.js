import Tone from "tone"

export default class Oscillator {
  constructor(note, config) {
    this.osc = new Tone.Oscillator(note, config.type).start()
    this.ampEnv = new Tone.AmplitudeEnvelope(config.amp)

    this.filter = new Tone.Filter(config.filter.frequency)
    this.setResonance(config.filter.resonance)

    this.filterEnv = new Tone.FrequencyEnvelope(config.filter.env)
    this.filterEnv.connect(this.filter.frequency)

    this.osc.chain(this.filter, this.ampEnv, Tone.Master)
  }

  play() {
    this.ampEnv.triggerAttack()
    this.filterEnv.triggerAttack()
  }

  stop() {
    this.ampEnv.triggerRelease()
    this.filterEnv.triggerRelease()
  }

  setAmpEnv(property, value) {
    this.ampEnv[property] = value
  }

  setCutoff(value) {
    this.filter.frequency.value = value
  }

  setResonance(value) {
    this.filter.Q.value = value
  }

  setFilterEnv(property, value) {
    this.filterEnv[property] = value
  }
}

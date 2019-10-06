import Tone from "tone"

export default class Oscillator {
  constructor(note, config) {
    this.oscillators = []
    this.oscillators.push(
      new Tone.Oscillator(note, config.oscillators[0].type).start()
    )
    this.oscillators.push(
      new Tone.Oscillator(note, config.oscillators[1].type).start()
    )
    this.ampEnv = new Tone.AmplitudeEnvelope(config.amp)

    this.filter = new Tone.Filter(config.filter.frequency)
    this.setResonance(config.filter.resonance)

    this.filterEnv = new Tone.FrequencyEnvelope(config.filter.env)
    this.filterEnv.connect(this.filter.frequency)

    this.oscillators.forEach(osc => osc.connect(this.filter))
    this.filter.chain(this.ampEnv, Tone.Master)
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

  setType(oscNumber, waveform) {
    this.oscillators[oscNumber].type = waveform
  }

  setDetune(oscNumber, cents) {
    this.oscillators[oscNumber].detune.value = cents
  }

  setResonance(value) {
    this.filter.Q.value = value
  }

  setFilterEnv(property, value) {
    this.filterEnv[property] = value
  }
}

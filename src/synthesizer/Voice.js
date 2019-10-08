import Tone from "tone"

export default class Voice {
  constructor(note, config) {
    this.oscillators = this._buildOscillators(note, config)
    this.ampEnv = new Tone.AmplitudeEnvelope(config.amp)

    this.filter = new Tone.Filter(config.filter.frequency)
    this.setResonance(config.filter.resonance)

    this.filterEnv = new Tone.FrequencyEnvelope(config.filter.env)
    this.filterEnv.connect(this.filter.frequency)

    this.oscillators.forEach(osc => osc.connect(this.filter))
    console.log(this.filter.numberOfInputs)
    this.filter.chain(this.ampEnv, Tone.Master)
  }

  _buildOscillators(note, config) {
    return config.oscillators.map(oscConfig => {
      const osc = new Tone.Oscillator(note, oscConfig.type).start()
      osc.detune.value = oscConfig.detune
      return osc
    })
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

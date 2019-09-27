import Oscillator from "./Oscillator"

export default class AudioEngine {
  constructor() {
    this.notes = {}
    this.oscConfig = initialValues
  }

  setWaveform(waveform) {
    this.oscConfig.type = waveform
    this.changeAllNotes(note => (note.osc.type = waveform))
  }

  keyDown(note) {
    this.notes[note] = new Oscillator(note, this.oscConfig)
    this.notes[note].play()
  }

  keyUp(note) {
    this.notes[note] && this.notes[note].stop()
  }

  setAmpEnv(property, value) {
    this.oscConfig.amp[property] = value
    this.changeAllNotes(note => note.setAmpEnv(property, value))
  }

  setFilterEnv(property, value) {
    this.oscConfig.filter.env[property] = value
    this.changeAllNotes(note => note.setFilterEnv(property, value))
  }

  setCutoff(value) {
    this.oscConfig.filter.frequency = value
    this.changeAllNotes(note => note.setCutoff(value))
  }

  setResonance(value) {
    this.oscConfig.filter.resonance = value
    this.changeAllNotes(note => note.setResonance(value))
  }

  setDetune(cents) {
    this.oscConfig.osc.detune = cents
    this.changeAllNotes(note => note.setDetune(cents))
  }

  changeAllNotes(cb) {
    Object.values(this.notes).forEach(note => cb(note))
  }
}

export const initialValues = {
  osc: {
    type: "sine",
    detune: 0
  },
  amp: {
    attack: 0.3,
    decay: 6,
    sustain: 0.5,
    release: 0.8
  },
  filter: {
    frequency: 350,
    resonance: 1,
    env: {
      attack: 0.3,
      decay: 6,
      sustain: 0.5,
      release: 0.8
    }
  }
}

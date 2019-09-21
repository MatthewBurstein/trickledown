import Oscillator from "./Oscillator"

export default class AudioEngine {
  constructor() {
    this.notes = {}
    this.oscConfig = initialValues
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

  setCutoff(value) {
    this.oscConfig.filter.frequency = value
    this.changeAllNotes(note => note.setCutoff(value))
  }

  setResonance(value) {
    this.oscConfig.filter.resonance = value
    this.changeAllNotes(note => note.setResonance(value))
  }

  changeAllNotes(cb) {
    Object.values(this.notes).forEach(note => cb(note))
  }
}

export const initialValues = {
  amp: {
    attack: 0.3,
    decay: 6,
    sustain: 4.5,
    release: 0.8
  },
  filter: {
    frequency: 350,
    resonance: 1
  }
}

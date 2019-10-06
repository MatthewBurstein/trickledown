import Oscillators from "./Oscillators"

export default class AudioEngine {
  constructor() {
    this.notes = {}
    this.config = initialValues
  }

  setWaveform(oscillatorNumber, waveform) {
    this.config.oscillators[oscillatorNumber].type = waveform
    this.changeAllNotes(note => note.setType(oscillatorNumber, waveform))
  }

  setDetune(oscillatorNumber, cents) {
    this.config.oscillators[oscillatorNumber].detune = cents
    this.changeAllNotes(note => note.setDetune(oscillatorNumber, cents))
  }

  keyDown(note) {
    this.notes[note] = new Oscillators(note, this.config)
    this.notes[note].play()
  }

  keyUp(note) {
    this.notes[note] && this.notes[note].stop()
  }

  setAmpEnv(property, value) {
    this.config.amp[property] = value
    this.changeAllNotes(note => note.setAmpEnv(property, value))
  }

  setFilterEnv(property, value) {
    this.config.filter.env[property] = value
    this.changeAllNotes(note => note.setFilterEnv(property, value))
  }

  setCutoff(value) {
    this.config.filter.frequency = value
    this.changeAllNotes(note => note.setCutoff(value))
  }

  setResonance(value) {
    this.config.filter.resonance = value
    this.changeAllNotes(note => note.setResonance(value))
  }

  changeAllNotes(cb) {
    Object.values(this.notes).forEach(note => cb(note))
  }
}

export const initialValues = {
  oscillators: [
    {
      type: "sine",
      detune: 0
    },
    {
      type: "sine",
      detune: 35
    }
  ],
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

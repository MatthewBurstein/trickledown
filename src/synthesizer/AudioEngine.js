import Oscillator from "./Oscillator"

class AudioEngine {
  constructor() {
    this.notes = {}
    this.ampEnvConfig = initialValues.ampEnv
  }

  keyDown(note) {
    this.notes[note] = new Oscillator(note, this.ampEnvConfig)
    this.notes[note].play()
  }

  keyUp(note) {
    this.notes[note] && this.notes[note].stop()
  }

  setAmpEnv(property, value) {
    this.ampEnvConfig[property] = value
    this.changeAllNotes(note => {
      note.setAmpEnv(property, value)
    })
  }

  changeAllNotes(cb) {
    Object.values(this.notes).forEach(note => cb(note))
  }
}

export default AudioEngine

export const initialValues = {
  ampEnv: {
    attack: 0.3,
    decay: 6,
    sustain: 4.5,
    release: 0.8
  }
}

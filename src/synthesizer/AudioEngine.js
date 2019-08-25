import Tone from "tone"

class AudioEngine {
  constructor() {
    this.synth = new Tone.Synth().toMaster()
  }

  play(note, octave) {
    this.synth.triggerAttackRelease(note + octave, 1)
  }
}

export default AudioEngine

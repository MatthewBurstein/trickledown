import Tone from "tone"

export default class Filter {
  constructor(config) {
    this.filter = new Tone.Filter(config.frequency)
  }

  setCutoff(value) {
    this.filter.frequency.value = value
  }

  getFilter() {
    return this.filter
  }
}

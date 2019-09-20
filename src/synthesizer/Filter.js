import Tone from "tone"

export default class Filter {
  constructor(initialFilterConfig) {
    this.filter = new Tone.Filter()
  }

  getFilter() {
    return this.filter
  }
}

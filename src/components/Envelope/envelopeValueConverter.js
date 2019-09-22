const envelopeFactor = 10
// Tone does not accept 0 value for decay and release
// TODO fix this when using callibrating envelope.
const pseudoZero = 0.01
export const engineToControl = engineValue =>
  (engineValue === pseudoZero ? 0 : engineValue) * envelopeFactor

export const controlToEngine = controlValue =>
  controlValue > 0 ? controlValue / envelopeFactor : pseudoZero

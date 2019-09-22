// arbitrary number to callibrate the slider. Slider emits values between 0 and 100
const envelopeFactor = 10
// Tone does not accept 0 value for decay and release
// TODO fix this when using callibrating envelope.
const pseudoZero = 0.01

const engineToControlAttack = engineValue => engineValue * envelopeFactor

const engineToControlDecayRelease = engineValue =>
  (engineValue === pseudoZero ? 0 : engineValue) * envelopeFactor

const enginetoControlSustain = engineValue => {
  // Sustain is a number between 0 and 1. Slider emits value between 0 and 100.
  return engineValue * 100
}

export const engineToControl = {
  attack: engineToControlAttack,
  decay: engineToControlDecayRelease,
  sustain: enginetoControlSustain,
  release: engineToControlDecayRelease
}

export const controlToEngineAttack = controlValue =>
  controlValue > 0 ? controlValue / envelopeFactor : 0

export const controlToEngineDecayRelease = controlValue =>
  controlValue > 0 ? controlValue / envelopeFactor : pseudoZero

export const controlToEngineSustain = controlValue =>
  // Sustain is a number between 0 and 1. Slider emits value between 0 and 100.
  controlValue > 0 ? controlValue / 100 : 0

export const controlToEngine = {
  attack: controlToEngineAttack,
  decay: controlToEngineDecayRelease,
  sustain: controlToEngineSustain,
  release: controlToEngineDecayRelease
}

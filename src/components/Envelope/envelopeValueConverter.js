const envelopeFactor = 10
export const envelopeToControl = envelopeValue => {
  return envelopeValue * envelopeFactor
}

export const controlToEnvelope = controlValue => {
  return controlValue > 0 ? controlValue / envelopeFactor : 0
}

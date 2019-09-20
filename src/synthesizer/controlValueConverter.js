export const convertRangeToRange = (value, oldMin, oldMax, newMin, newMax) => {
  const oldRange = oldMax - oldMin
  const newRange = newMax - newMin
  return ((value - oldMin) * newRange) / oldRange + newMin
}

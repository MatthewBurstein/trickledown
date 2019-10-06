import React, { useState, useEffect } from "react"
import {
  ControlBody,
  Arrow,
  KnobContainer,
  ControlContainer,
  ControlTitle
} from "./rotaryControlStyledComponent"

export default ({ title, effectValue, initialValue, centered = false }) => {
  const [rotation, setRotation] = useRotation(
    calibrateInitialValue(initialValue, centered)
  )
  useEffect(() => effectValue(getControllerValue(rotation, centered)))

  const handleClick = clickEvent => {
    const originalYCoord = clickEvent.clientY
    const moveListener = moveEvent => {
      const newYCoord = moveEvent.clientY
      setRotation(rotation + originalYCoord - newYCoord)
    }
    const upListener = _ => {
      window.removeEventListener("mousemove", moveListener)
      window.removeEventListener("mouseup", upListener)
    }

    window.addEventListener("mousemove", moveListener)
    window.addEventListener("mouseup", upListener)
  }

  return (
    <ControlContainer>
      <ControlTitle>{title}</ControlTitle>
      <KnobContainer rotation={rotation} onMouseDown={e => handleClick(e)}>
        <ControlBody>
          <Arrow />
        </ControlBody>
      </KnobContainer>
    </ControlContainer>
  )
}

const rotationOffset = -130
export const minUIRotaryValue = 0
export const maxUIRotaryValue = -2 * rotationOffset
export const centeredMinUIRotaryValue = rotationOffset
export const centeredMaxUIRotaryValue = -rotationOffset
const minRotation = minUIRotaryValue + rotationOffset
const maxRotation = maxUIRotaryValue + rotationOffset

const useRotation = initialValue => {
  const [value, setValue] = useState(initialValue + rotationOffset)
  const calibrateAndSetValue = newValue => {
    if (newValue < minRotation || newValue > maxRotation) {
      return
    }
    setValue(calibrateRotation(newValue))
  }
  return [value, calibrateAndSetValue]
}

const calibrateRotation = value => {
  if (value < minRotation) {
    return minRotation
  } else if (value > maxRotation) {
    return maxRotation
  } else {
    return value
  }
}

const getControllerValue = (rotation, centered) =>
  centered ? rotation : rotation - rotationOffset

const calibrateInitialValue = (passedValue, centered) =>
  centered ? passedValue - rotationOffset : passedValue

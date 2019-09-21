import React, { useState, useEffect } from "react"
import {
  ControlBody,
  Arrow,
  KnobContainer,
  ControlContainer,
  ControlTitle
} from "./rotaryControlStyledComponent"

export default ({ title, effectValue, initialValue }) => {
  const [rotation, setRotation] = useRotation(initialValue)
  useEffect(() => effectValue(getRealValue(rotation)))

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
export const minRealRotaryValue = 0
export const maxRealRotaryValue = 260
const minRotation = minRealRotaryValue + rotationOffset
const maxRotation = maxRealRotaryValue + rotationOffset

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

const getRealValue = rotation => rotation - rotationOffset

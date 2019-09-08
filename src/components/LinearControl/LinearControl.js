import React, { useState } from "react"
import {
  Channel,
  Slider,
  ControlContainer,
  Label,
  SliderContainer,
  controlHeight
} from "./linearControlStyledComponents"

export default ({ label, effectValue, initialValue }) => {
  const [position, setPosition] = useState(initialValue)

  const handelSlide = clickEvent => {
    let oldCoord = clickEvent.clientY

    const moveListener = moveEvent => {
      const change = oldCoord - moveEvent.clientY
      let newPosition = position + change
      if (newPosition < 0) {
        newPosition = 0
      } else if (newPosition > controlHeight) {
        newPosition = controlHeight
      }
      setPosition(newPosition)
      effectValue(newPosition)
      oldCoord = moveEvent.clientY + change
    }

    window.addEventListener("mousemove", moveListener)
    window.addEventListener("mouseup", () =>
      window.removeEventListener("mousemove", moveListener)
    )
  }

  return (
    <ControlContainer id="contolContainer">
      <SliderContainer>
        <Channel />
        <Slider onMouseDown={e => handelSlide(e)} position={position} />
      </SliderContainer>
      <Label>{label}</Label>
    </ControlContainer>
  )
}

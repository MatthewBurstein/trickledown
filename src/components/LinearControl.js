import React, { useState } from "react"
import {
  Channel,
  Slider,
  ControlContainer,
  controlHeight,
  sliderHeight
} from "./linearControlStyledComponents"

export default () => {
  const [position, setPosition] = useState(sliderHeight)

  const handelSlide = clickEvent => {
    let oldCoord = clickEvent.clientY

    const moveListener = moveEvent => {
      const change = oldCoord - moveEvent.clientY
      let newPosition = position + change
      if (newPosition < sliderHeight) {
        newPosition = sliderHeight
      } else if (newPosition > controlHeight) {
        newPosition = controlHeight
      }
      setPosition(newPosition)
      oldCoord = moveEvent.clientY + change
    }

    window.addEventListener("mousemove", moveListener)
    window.addEventListener("mouseup", () =>
      window.removeEventListener("mousemove", moveListener)
    )
  }

  return (
    <ControlContainer>
      <Channel />
      <Slider onMouseDown={e => handelSlide(e)} position={position} />
    </ControlContainer>
  )
}

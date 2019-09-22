import React, { useState, useEffect, useRef } from "react"
import {
  Channel,
  Slider,
  ControlContainer,
  Label,
  SliderContainer,
  controlHeight
} from "./linearControlStyledComponents"

export default ({ label, effectValue, initialValue }) => {
  const channelContainer = useRef(null)
  const sliderBottomYCoord = useRef(null)

  const [position, setPosition] = useState(initialValue)

  useEffect(() => effectValue(position))

  useEffect(() => {
    sliderBottomYCoord.current = channelContainer.current.getBoundingClientRect().bottom
  }, [])

  const handleChannelClick = event =>
    setPosition(sliderBottomYCoord.current - event.clientY)

  const handelSlide = clickEvent => {
    clickEvent.stopPropagation()
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
      oldCoord = moveEvent.clientY + change
    }

    window.addEventListener("mousemove", moveListener)
    window.addEventListener("mouseup", () =>
      window.removeEventListener("mousemove", moveListener)
    )
  }

  return (
    <ControlContainer id="contolContainer">
      <SliderContainer
        ref={channelContainer}
        onMouseDown={e => handleChannelClick(e)}
      >
        <Channel />
        <Slider onMouseDown={e => handelSlide(e)} position={position} />
      </SliderContainer>
      <Label>{label}</Label>
    </ControlContainer>
  )
}

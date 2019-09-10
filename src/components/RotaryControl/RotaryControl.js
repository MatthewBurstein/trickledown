import React, { useState } from "react"
import {
  ControlBody,
  Arrow,
  ControlContainer
} from "./rotaryControlStyledComponent"

export default () => {
  const [rotation, setRotation] = useState(0)

  const handleClick = clickEvent => {
    const clickY = clickEvent.clientY
    const moveListener = moveEvent => {
      const moveY = moveEvent.clientY
      setRotation(rotation + moveY - clickY)
    }
    const upListener = _ => {
      window.removeEventListener("mousemove", moveListener)
      window.removeEventListener("mouseup", upListener)
    }

    window.addEventListener("mousemove", moveListener)
    window.addEventListener("mouseup", upListener)
  }

  return (
    <div>
      <ControlContainer rotation={rotation} onMouseDown={e => handleClick(e)}>
        <ControlBody>
          <Arrow />
        </ControlBody>
      </ControlContainer>
    </div>
  )
}

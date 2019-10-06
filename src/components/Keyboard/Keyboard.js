import React, { useState } from "react"
import Octave from "./Octave"
import { Keyboard } from "./Keys"
import range from "lodash/range"

export default ({ playNote, stopNote }) => {
  const [isMouseDown, setIsMouseDown] = useState(false)
  const numberOfOctaves = 2
  return (
    <Keyboard octaveNumber={numberOfOctaves}>
      {range(numberOfOctaves).map((octNumber, idx) => (
        <Octave
          key={"octave-" + octNumber}
          isMouseDown={isMouseDown}
          setIsMouseDown={setIsMouseDown}
          playNote={playNote}
          stopNote={stopNote}
          number={octNumber}
          isLast={idx === numberOfOctaves - 1}
        />
      ))}
    </Keyboard>
  )
}

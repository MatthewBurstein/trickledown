import React, { useState } from "react"
import {
  CKey,
  CSharpKey,
  DKey,
  DSharpKey,
  EKey,
  FKey,
  FSharpKey,
  GKey,
  GSharpKey,
  AKey,
  ASharpKey,
  BKey,
  HangingCKey,
  Octave
} from "./Keys"

const Keys = {
  C: CKey,
  "C#": CSharpKey,
  D: DKey,
  "D#": DSharpKey,
  E: EKey,
  F: FKey,
  "F#": FSharpKey,
  G: GKey,
  "G#": GSharpKey,
  A: AKey,
  "A#": ASharpKey,
  B: BKey,
  Hanging: HangingCKey
}

export default ({
  number,
  playNote,
  stopNote,
  isLast,
  isMouseDown,
  setIsMouseDown
}) => {
  const [hoveredKey, setHoveredKey] = useState("")
  const handleMouseDown = (note, octave) => {
    setIsMouseDown(true)
    const mouseUpListener = () => {
      setIsMouseDown(false)
      window.removeEventListener("mouseup", mouseUpListener)
    }
    window.addEventListener("mouseup", mouseUpListener)
    return playNote(note, octave)
  }

  const handleMouseUp = (note, octave) => {
    return stopNote(note, octave)
  }

  const handleMouseLeave = (note, octave) => {
    setHoveredKey("")
    stopNote(note, octave)
  }

  const handleMouseEnter = (note, octave) => {
    setHoveredKey(note + octave)
    isMouseDown && playNote(note, octave)
  }

  const renderKey = (note, octave = number, isHanging = false) => {
    const Key = isHanging ? HangingCKey : Keys[note]
    const isHovered = hoveredKey === note + octave
    return (
      <Key
        onMouseDown={() => handleMouseDown(note, octave)}
        onMouseUp={() => handleMouseUp(note, octave)}
        onMouseLeave={() => handleMouseLeave(note, octave)}
        onMouseEnter={() => handleMouseEnter(note, octave)}
        octave={isHanging ? 1 : octave}
        isHovered={isHovered}
        isPressed={isMouseDown && isHovered}
      >
        {note}
      </Key>
    )
  }

  const renderHangingC = () => {
    return renderKey("C", number + 1, true)
  }
  return (
    <Octave>
      {renderKey("C")}
      {renderKey("D")}
      {renderKey("E")}
      {renderKey("F")}
      {renderKey("G")}
      {renderKey("A")}
      {renderKey("B")}
      {renderKey("C#")}
      {renderKey("D#")}
      {renderKey("F#")}
      {renderKey("G#")}
      {renderKey("A#")}
      {isLast && renderHangingC()}
    </Octave>
  )
}

import React from "react"
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

export default ({ number, playNote, stopNote, isLast }) => {
  const renderKey = (note, octave = number, isHanging = false) => {
    const Key = isHanging ? HangingCKey : Keys[note]

    return (
      <Key
        onMouseDown={() => playNote(note, octave)}
        onMouseUp={() => stopNote(note, octave)}
        onMouseLeave={() => stopNote(note, octave)}
        octave={isHanging ? 1 : octave}
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

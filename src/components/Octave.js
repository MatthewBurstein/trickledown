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

export default ({ number, playNote, isLast }) => {
  const renderHangingC = () => {
    return (
      <HangingCKey octave={1} onMouseDown={() => playNote("C", number + 1)}>
        C
      </HangingCKey>
    )
  }

  return (
    <Octave>
      <CKey onMouseDown={() => playNote("C", number)} octave={number}>
        C
      </CKey>
      <DKey onMouseDown={() => playNote("D", number)} octave={number}>
        D
      </DKey>
      <EKey onMouseDown={() => playNote("E", number)} octave={number}>
        E
      </EKey>
      <FKey onMouseDown={() => playNote("F", number)} octave={number}>
        F
      </FKey>
      <GKey onMouseDown={() => playNote("G", number)} octave={number}>
        G
      </GKey>
      <AKey onMouseDown={() => playNote("A", number)} octave={number}>
        A
      </AKey>
      <BKey onMouseDown={() => playNote("B", number)} octave={number}>
        B
      </BKey>
      <CSharpKey onMouseDown={() => playNote("C#", number)} octave={number}>
        C#
      </CSharpKey>
      <DSharpKey onMouseDown={() => playNote("D#", number)} octave={number}>
        D#
      </DSharpKey>
      <FSharpKey onMouseDown={() => playNote("F#", number)} octave={number}>
        F#
      </FSharpKey>
      <GSharpKey onMouseDown={() => playNote("G#", number)} octave={number}>
        G#
      </GSharpKey>
      <ASharpKey onMouseDown={() => playNote("A#", number)} octave={number}>
        A#
      </ASharpKey>
      {isLast && renderHangingC()}
    </Octave>
  )
}

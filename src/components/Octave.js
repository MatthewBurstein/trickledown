import React from 'react';
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
  Octave,
  OctaveSpacer
} from './Keys'

export default ({ number, playNote }) => {
  return(
    <OctaveSpacer>
      <Octave>
        <CKey onClick={() => playNote('C', number)} octave={number}>C</CKey>
        <DKey onClick={() => playNote('D', number)} octave={number}>D</DKey>
        <EKey onClick={() => playNote('E', number)} octave={number}>E</EKey>
        <FKey onClick={() => playNote('F', number)} octave={number}>F</FKey>
        <GKey onClick={() => playNote('G', number)} octave={number}>G</GKey>
        <AKey onClick={() => playNote('A', number)} octave={number}>A</AKey>
        <BKey onClick={() => playNote('B', number)} octave={number}>B</BKey>
        <CSharpKey onClick={() => playNote('C#', number)} octave={number}>C#</CSharpKey>
        <DSharpKey onClick={() => playNote('D#', number)} octave={number}>D#</DSharpKey>
        <FSharpKey onClick={() => playNote('F#', number)} octave={number}>F#</FSharpKey>
        <GSharpKey onClick={() => playNote('G#', number)} octave={number}>G#</GSharpKey>
        <ASharpKey onClick={() => playNote('A#', number)} octave={number}>A#</ASharpKey>
      </Octave>
    </OctaveSpacer>
  )
}
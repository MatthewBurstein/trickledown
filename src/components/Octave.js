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

export default ({ number }) => {
  return(
    <OctaveSpacer>
      <Octave>
        <CKey octave={number}>C</CKey>
        <CSharpKey octave={number}>C#</CSharpKey>
        <DKey octave={number}>D</DKey>
        <DSharpKey octave={number}>D#</DSharpKey>
        <EKey octave={number}>E</EKey>
        <FKey octave={number}>F</FKey>
        <FSharpKey octave={number}>F#</FSharpKey>
        <GKey octave={number}>G</GKey>
        <GSharpKey octave={number}>G#</GSharpKey>
        <AKey octave={number}>A</AKey>
        <ASharpKey octave={number}>A#</ASharpKey>
        <BKey octave={number}>B</BKey>
      </Octave>
    </OctaveSpacer>
  )
}
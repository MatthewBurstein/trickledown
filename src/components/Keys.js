import styled, { css } from 'styled-components'

export const OctaveSpacer = styled.div`
  position: static;
`

export const Octave = styled.div`
  display: flex;
  position: relative;
`

const whiteKeyWidth = 40
const blackKeyWidth = 30

const genericKey = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const blackKey = whiteKeysToLeft => styled.div`
  ${genericKey}
  height: 120px;
  width: ${blackKeyWidth}px;
  left: ${props => (whiteKeyWidth * props.octave * 7) + (whiteKeyWidth * whiteKeysToLeft) - (blackKeyWidth / 2)}px;
  background-color: black;
  color: white;
`

const whiteKey = (whiteKeysToLeft, isLast) => styled.div`
  ${genericKey}
  height: 200px;
  width: ${whiteKeyWidth}px;
  left: ${props => (whiteKeyWidth * props.octave * 7) + (whiteKeysToLeft * whiteKeyWidth)}px;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  border-right: ${_ => isLast ? '1px solid black': ''};
`

export const CKey = whiteKey(0)
export const CSharpKey = blackKey(1)
export const DKey = whiteKey(1)
export const DSharpKey = blackKey(2)
export const EKey = whiteKey(2)
export const FKey = whiteKey(3)
export const FSharpKey = blackKey(4)
export const GKey = whiteKey(4)
export const GSharpKey = blackKey(5)
export const AKey = whiteKey(5)
export const ASharpKey = blackKey(6)
export const BKey = whiteKey(6)

export const HangingCKey = whiteKey(7, true)
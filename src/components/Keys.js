import styled, { css } from 'styled-components'
import colors from '../ColorPalette'

const {
  DARK_GREY
} = colors

const keyboardHeight = 200
const whiteKeyWidth = 40
const blackKeyWidth = 30

export const EntireKeyboard = styled.div`
  display: flex;
  margin: auto;
  width: ${props => props.octaveNumber * 7 * whiteKeyWidth + whiteKeyWidth}px;
`

export const Octave = styled.div`
  display: flex;
  position: relative;
  height: ${keyboardHeight}px;
`

const genericKey = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-top: 1px solid ${DARK_GREY};
  border-radius: 0 0 5px 5px;
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
  border-left: 1px solid ${DARK_GREY};
  border-bottom: 1px solid ${DARK_GREY};
  border-right: ${_ => isLast ? `1px solid ${DARK_GREY}`: ''};
  background-color: white;
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
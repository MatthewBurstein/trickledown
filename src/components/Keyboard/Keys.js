import styled, { css } from "styled-components"
import colors from "../../ColorPalette"

const {
  BLACK,
  WHITE,
  DARK_GREY,
  PALE_PINK,
  PALEST_PINK,
  MAROON,
  DARK_MAROON
} = colors

const keyboardHeight = 80
const whiteKeyWidth = 40
const blackKeyWidth = 30

export const Keyboard = styled.div`
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
  user-select: none;
`

const setKeyColor = (isPressed, isHovered, isBlackKey) => {
  if (isBlackKey) {
    if (isPressed) {
      return DARK_MAROON
    } else if (isHovered) {
      return MAROON
    } else {
      return BLACK
    }
  } else {
    if (isPressed) {
      return PALE_PINK
    } else if (isHovered) {
      return PALEST_PINK
    } else {
      return WHITE
    }
  }
}

const blackKey = whiteKeysToLeft => styled.div`
  ${genericKey}
  height: ${keyboardHeight * 0.6}px;
  width: ${blackKeyWidth}px;
  left: ${props =>
    whiteKeyWidth * props.octave * 7 +
    whiteKeyWidth * whiteKeysToLeft -
    blackKeyWidth / 2}px;
  background-color: ${({ isPressed, isHovered }) =>
    setKeyColor(isPressed, isHovered, true)};
  color: white;
`

const whiteKey = (whiteKeysToLeft, isLast) => styled.div`
  ${genericKey}
  height: ${keyboardHeight}px;
  width: ${whiteKeyWidth}px;
  left: ${props =>
    whiteKeyWidth * props.octave * 7 + whiteKeysToLeft * whiteKeyWidth}px;
  border-left: 1px solid ${DARK_GREY};
  border-bottom: 1px solid ${DARK_GREY};
  border-right: ${_ => (isLast ? `1px solid ${DARK_GREY}` : "")};
  background-color: ${({ isPressed, isHovered }) =>
    setKeyColor(isPressed, isHovered, false)};
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

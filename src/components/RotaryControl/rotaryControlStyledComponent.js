import styled from "styled-components"

import colors from "../../ColorPalette"

export const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const KnobContainer = styled.div.attrs(props => {
  return {
    style: {
      transform: `rotate(${props.rotation}deg)`
    }
  }
})`
  display: inline-block;
`

export const ControlBody = styled.div`
  background-color: ${colors.DARK_GREY};
  height: 30px;
  width: 30px;
  border-radius: 15px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
`

export const Arrow = styled.div`
  height: 15px;
  width: 4px;
  background-color: ${colors.TURQOISE};
  position: relative;

  ::after {
    content: "";
    position: absolute;
    left: 0px;
    top: -4px;
    border-bottom: 4px solid ${colors.TURQOISE};
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;
  }
`

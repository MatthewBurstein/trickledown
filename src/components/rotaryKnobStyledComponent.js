import styled from 'styled-components'

import colors from '../ColorPalette'

export const KnobContainer = styled.div``

export const KnobBody = styled.div`
  background-color: black;
  height:30px;
  width:30px;
  border-radius: 15px;
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
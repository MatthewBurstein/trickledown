import styled, { css } from "styled-components"
import colors from "../ColorPalette"

export const SynthUI = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: space-between;
`

export const Controls = styled.div`
  display: flex;
`

export const genericControlContainer = css`
  margin: 4px;
  border: 1px solid ${colors.LIGHT_PURPLE};
  padding: 2px;
`

export const genericControlTitle = css`
  padding: 2px;
`

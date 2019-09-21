import styled from "styled-components"
import { genericControlContainer, genericControlTitle } from "../SynthLayout"

export const FilterControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${genericControlContainer};
`
export const CutoffResonance = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2px;
`

export const FilterTitle = styled.div`
  width: 100%;
  ${genericControlTitle}
`

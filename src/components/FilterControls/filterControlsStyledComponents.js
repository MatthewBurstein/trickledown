import styled from "styled-components"
import { genericControlContainer, genericControlTitle } from "../SynthLayout"

export const FilterTitleAndControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${genericControlContainer};
`

export const FilterControlsContainer = styled.div`
  display: flex;
`

export const CutoffResonance = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2px;
`

export const FilterTitle = styled.div`
  flex-basis: 100%;
  ${genericControlTitle}
`

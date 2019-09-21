import styled from "styled-components"
import colors from "../../ColorPalette"

const labelLineHeight = 20
const switchHeight = 10

export const Control = styled.div`
  position: relative;
  display: flex;
`

export const Channel = styled.div`
  height: ${({ optionCount }) =>
    labelLineHeight * optionCount - (labelLineHeight - switchHeight)}px;
  width: 12px;
  background-color: ${colors.DARK_GREY};
  margin-top: ${(labelLineHeight - switchHeight) / 2}px;
`

export const Switch = styled.div`
  border: 1px solid black;
  height: ${switchHeight}px;
  width: 14px;
  background-color: ${colors.TURQOISE};
  position: absolute;
  margin-top: ${props => props.option * labelLineHeight}px;
  margin-left: -1px;
`

export const Labels = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 2px;
`

export const Label = styled.div`
  text-align: left;
  margin-top: ${props => (props.last ? "-1px" : "")};
`

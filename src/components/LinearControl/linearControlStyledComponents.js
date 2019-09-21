import styled from "styled-components"
import colors from "../../ColorPalette"
import { genericControlTitle } from "../SynthLayout"

export const controlHeight = 100
export const sliderHeight = 14
const sliderWidth = 20

export const Channel = styled.span`
  height: ${controlHeight + sliderHeight / 2}px;
  width: 2px;
  background-color: black;
  display: block;
  margin-left: 9px;
`

export const Slider = styled.span`
  width: ${sliderWidth}px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: ${colors.DARK_GREY};
  height: ${sliderHeight}px;
  display: block;
  margin-left: -11px;
  margin-top: ${props => controlHeight - sliderHeight / 2 - props.position}px;

  ::after {
    content: "";
    height: 2px;
    width: ${sliderWidth - 2}px;
    margin-left: ${1 - sliderWidth / 2}px;
    margin-top: ${sliderHeight / 2 - 2}px;
    background-color: ${colors.TURQOISE};
    position: absolute;
  }
`

export const SliderContainer = styled.div`
  display: flex;
`

export const ControlContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 3px;
  width: 20px;
`

export const Label = styled.div`
  user-select: none;
  text-align: center;
  ${genericControlTitle}
`

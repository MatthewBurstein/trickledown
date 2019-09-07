import styled from "styled-components"
import colors from "../ColorPalette"

export const controlHeight = 100
export const sliderHeight = 14

export const Channel = styled.span`
  height: ${controlHeight}px;
  width: 2px;
  background-color: black;
  display: inline-block;
`

export const Slider = styled.span`
  width: 20px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: ${colors.LIGHT_GREY};
  height: ${sliderHeight}px;
  display: inline-block;
  margin-left: -11px;
  margin-top: ${props => controlHeight - props.position}px;
`

export const ControlContainer = styled.div`
  display: flex;
`

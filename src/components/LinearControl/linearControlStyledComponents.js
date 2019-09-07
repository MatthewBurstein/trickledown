import styled from "styled-components"
import colors from "../../ColorPalette"

export const controlHeight = 100
export const sliderHeight = 14

export const Channel = styled.span`
  height: ${controlHeight}px;
  width: 2px;
  background-color: black;
  display: block;
  margin-left: 9px;
`

export const Slider = styled.span`
  width: 20px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: ${colors.LIGHT_GREY};
  height: ${sliderHeight}px;
  display: block;
  margin-left: -11px;
  margin-top: ${props => controlHeight - props.position}px;
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
`

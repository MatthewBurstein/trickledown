import React, { useState, useEffect } from "react"
import {
  Control,
  Channel,
  Switch,
  Labels,
  Label,
  SwitchTitle,
  ControlAndTitle
} from "./switchStyledComponents"

export default ({ options, initialOption, title, effectValue }) => {
  const [currentOption, setCurrentOption] = useState(initialOption)
  useEffect(() => {
    effectValue(options[currentOption])
  })

  const handleClick = () =>
    setCurrentOption((currentOption + 1) % options.length)

  return (
    <ControlAndTitle>
      {title && <SwitchTitle>{title}</SwitchTitle>}
      <Control>
        <Channel onClick={handleClick} optionCount={options.length}>
          <Switch option={currentOption} />
        </Channel>
        <Labels>
          {options.map((option, idx) => {
            return (
              <Label last={idx === options.length - 1} key={option}>
                {option}
              </Label>
            )
          })}
        </Labels>
      </Control>
    </ControlAndTitle>
  )
}

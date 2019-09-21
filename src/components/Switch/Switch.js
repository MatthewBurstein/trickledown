import React, { useState } from "react"
import {
  Control,
  Channel,
  Switch,
  Labels,
  Label
} from "./switchStyledComponents"

export default ({ labels }) => {
  const [option, setOption] = useState(0)

  const handleClick = () => setOption((option + 1) % labels.length)

  return (
    <Control>
      <Channel onClick={handleClick} optionCount={labels.length}>
        <Switch option={option} />
      </Channel>
      <Labels>
        {labels.map((label, idx) => {
          return (
            <Label last={idx === labels.length - 1} key={label}>
              {label}
            </Label>
          )
        })}
      </Labels>
    </Control>
  )
}

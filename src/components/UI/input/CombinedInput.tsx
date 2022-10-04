import React, { ChangeEvent } from 'react'
import classes from './combinedInput.module.scss'
import Input from './Input'
import RangeInput from './RangeInput'

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
  min: number
  max: number
  result?: number
  info?: string
  infoInBox?: boolean
  formatting?: (value: number) => string
  disabled?: boolean
  step?: number
  className?: string
  id?: string
  label?: string
}

export default function CombinedInput(props: Props) {
  const classNames = `${classes.combinedInput} ${
    props.disabled && classes.combinedInput__disabled
  } ${props.className || ''}`

  return (
    <div className={classNames}>
      <Input
        type='number'
        result={props.result}
        infoInBox={props.infoInBox}
        disabled={props.disabled}
        label={props.label}
        info={props.info}
        onChange={props.onChange}
        value={props.value}
        min={props.min}
        max={props.max}
      />
      <RangeInput
        className={classes.combinedWithInput}
        disabled={props.disabled}
        type='range'
        step={props.step}
        onChange={props.onChange}
        value={props.value}
        min={props.min}
        max={props.max}
      />
    </div>
  )
}

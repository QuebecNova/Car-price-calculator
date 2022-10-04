import React, { ChangeEvent } from 'react'
import classes from './rangeInput.module.scss'

type Props = {
  type: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
  min: number
  max: number
  disabled?: boolean
  step?: number
  className?: string
  label?: boolean
  id?: string
  labelText?: string
}

export default function RangeInput(props: Props) {
  const style = (() => {
    return {
      '--value': props.value || props.max / 2,
      '--min': props.min,
      '--max': props.max,
    }
  })()

  function changeInputWithStep(e: React.ChangeEvent<HTMLInputElement>) {
    if (!props.step) {
      props.onChange(e)
      return
    }

    const roundedValue =
      Math.round(parseInt(e.target.value) / props.step) * props.step

    e.target.value = roundedValue.toString()

    props.onChange(e)
    return
  }

  const label = props.label && (
    <label htmlFor={props.id} className={classes.label}>
      {props.labelText}
    </label>
  )

  return (
    <>
      {label}
      <input
        disabled={props.disabled}
        type={props.type}
        id={props.id || ''}
        style={style as React.CSSProperties}
        className={`${classes.rangeInput} ${props.className || ''}`}
        onChange={(e) => changeInputWithStep(e)}
        min={props.min}
        max={props.max}
        value={props.value}
      />
    </>
  )
}

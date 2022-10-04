import React, { ChangeEvent } from 'react'
import classes from './input.module.scss'

type Props = {
  type: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
  info?: string
  infoInBox?: boolean
  disabled?: boolean
  placeholder?: string
  className?: string
  label?: string
  id?: string
  min?: number
  max?: number
  validate?: () => void
}

export default function InputWithInfo(props: Props) {
  const infoClasses = `${classes.inputInfo} ${
    (props.infoInBox && classes.inputInfoInBox) || ''
  }`

  return (
    <div className={classes.inputWithInfo}>
      <input
        disabled={props.disabled}
        type={props.type}
        id={props.id || ''}
        className={`${classes.input} ${props.className || ''}`}
        onChange={props.onChange}
        placeholder={props.placeholder || ''}
        value={props.value}
        onBlur={props.validate}
        max={props.max}
        min={props.min}
      />
      {props.info && <div className={infoClasses}>{props.info}</div>}
    </div>
  )
}

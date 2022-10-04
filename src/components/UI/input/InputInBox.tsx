import React, { ChangeEvent } from 'react'
import classes from './inputInBox.module.scss'

type Props = {
  type: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
  result: number
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

export default function InputInBox(props: Props) {
  return (
    <div className={classes.inputWithInfo}>
      <div className={classes.inputConvertedValue}>{props.result}</div>
      {props.info && <div className={classes.inputInfo}>{props.info}</div>}
      <input
        disabled={props.disabled}
        type={props.type}
        id={props.id || ''}
        className={`${classes.input} ${props.className || ''} ${
          classes.inputInBox
        }`}
        onChange={props.onChange}
        placeholder={props.placeholder || ''}
        value={props.value}
        onBlur={props.validate}
        max={props.max}
        min={props.min}
      />
    </div>
  )
}

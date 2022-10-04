import React, { ChangeEvent } from 'react'
import { validateValue } from '../../../helpers/calculator'
import classes from './input.module.scss'
import InputInBox from './InputInBox'
import InputWithInfo from './InputWithInfo'

type Props = {
  type: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
  result?: number
  info?: string
  infoInBox?: boolean
  disabled?: boolean
  placeholder?: string
  className?: string
  label?: string
  id?: string
  min?: number
  max?: number
}

export default function Input(props: Props) {
  function validate() {
    if (!props.min || !props.max) return
    const mimicEvent = {
      target: {
        value: '',
      },
    }
    mimicEvent.target.value = validateValue(props.value, props.min, props.max)

    props.onChange(mimicEvent as ChangeEvent<HTMLInputElement>)
  }

  const label = props.label && (
    <label className={classes.label} htmlFor={props.id}>
      {props.label}
    </label>
  )

  const selectedInput = props.infoInBox ? (
    <InputInBox {...props} validate={validate} result={props.result || 0} />
  ) : (
    <InputWithInfo {...props} validate={validate} />
  )

  return (
    <div className={classes.inputWrapper}>
      {label}
      {selectedInput}
    </div>
  )
}

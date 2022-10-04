import React, { ChangeEvent } from 'react'
import { formatting } from '../helpers/formatting'
import classes from '../scss/calculator.module.scss'
import CombinedInput from './UI/input/CombinedInput'

type Props = {
  cost: string
  setCost: (e: ChangeEvent<HTMLInputElement>) => void
  contributionProcents: string
  setContributionProcents: (e: ChangeEvent<HTMLInputElement>) => void
  term: string
  setTerm: (e: ChangeEvent<HTMLInputElement>) => void
  contribution: number
  disabled: boolean
}

export default function Inputs(props: Props) {
  return (
    <div className={classes.inputs}>
      <CombinedInput
        label='Стоимость автомобиля'
        info='₽'
        formatting={formatting('ru')}
        onChange={props.setCost}
        value={props.cost}
        disabled={props.disabled}
        step={100000}
        min={1000000}
        max={6000000}
      />
      <CombinedInput
        label='Первоначальный взнос'
        info='%'
        infoInBox
        result={props.contribution}
        formatting={formatting('ru')}
        onChange={props.setContributionProcents}
        value={props.contributionProcents}
        disabled={props.disabled}
        min={10}
        max={60}
      />
      <CombinedInput
        label='Срок лизинга'
        info='мес.'
        formatting={formatting('ru')}
        onChange={props.setTerm}
        value={props.term}
        disabled={props.disabled}
        min={1}
        max={60}
      />
    </div>
  )
}

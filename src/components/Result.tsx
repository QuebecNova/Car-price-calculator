import React from 'react'
import classes from '../scss/result.module.scss'
import calcClasses from '../scss/calculator.module.scss'

type Props = {
  currency: string
  monthPayment: number
  leasingResult: number
  formating: (value: number) => string
}

export default function Result({
  monthPayment,
  leasingResult,
  currency,
  formating,
}: Props) {
  return (
    <div>
      <div className={`${classes.result} ${calcClasses.sum}`}>
        <p>Сумма договора лизинга</p>
        <div>
          <p className={classes.resultNumber}>{formating(leasingResult)}</p>
          <span>{currency}</span>
        </div>
      </div>
      <div className={`${classes.result} ${calcClasses.payment}`}>
        <p>Ежемесячный платеж </p>
        <div>
          <p className={classes.resultNumber}>{formating(monthPayment)}</p>
          <span>{currency}</span>
        </div>
      </div>
    </div>
  )
}

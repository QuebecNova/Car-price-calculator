import { ChangeEvent, useState } from 'react'
import { formatting } from './../helpers/formatting'
import { getLeasingResult, getMonthPayment } from '../helpers/calculator'
import { getContribution } from './../helpers/calculator'
import { sendData } from '../helpers/sendData'
import { IData } from '../interfaces/IData'

import classes from '../scss/calculator.module.scss'
import Inputs from './Inputs'
import Result from './Result'
import Button from './UI/button/Button'

export default function Calculator() {
  const [cost, setCost] = useState('3300000')
  const [contributionProcents, setContributionProcents] = useState('13')
  const [term, setTerm] = useState('60')
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  const monthPayment = getMonthPayment(
    parseInt(cost),
    parseInt(contributionProcents),
    parseInt(term)
  )

  const contribution = getContribution(
    parseInt(cost),
    parseInt(contributionProcents)
  )

  const leasingResult = getLeasingResult(
    monthPayment,
    contribution,
    parseInt(term)
  )

  async function handleSendData() {
    if (isLoading) return
    setIsLoading(true)

    const data: IData = {
      car_coast: parseInt(cost),
      initail_payment: contribution,
      initail_payment_percent: parseInt(contributionProcents),
      lease_term: parseInt(term),
      monthly_payment_from: monthPayment,
      total_sum: parseInt(cost) + contribution + parseInt(term) * monthPayment,
    }
    try {
      await sendData(data)
      setIsLoading(false)
      setIsDisabled(true)
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }

  const inputsProps = {
    cost,
    setCost: (e: ChangeEvent<HTMLInputElement>) => setCost(e.target.value),
    contributionProcents,
    setContributionProcents: (e: ChangeEvent<HTMLInputElement>) =>
      setContributionProcents(e.target.value),
    term,
    setTerm: (e: ChangeEvent<HTMLInputElement>) => setTerm(e.target.value),
    contribution: contribution,
    disabled: isDisabled,
  }

  return (
    <div className={classes.calculator}>
      <h1 className={classes.h1}>Рассчитайте стоимость автомобиля в лизинг</h1>
      <Inputs {...inputsProps} />
      <Result
        monthPayment={monthPayment}
        leasingResult={leasingResult}
        currency={'₽'}
        formating={formatting('ru')}
      />
      <Button
        className={classes.sendButton}
        onClick={handleSendData}
        isLoading={isLoading}
        disabled={isDisabled}
      >
        Оставить заявку
      </Button>
    </div>
  )
}

import { ReactNode } from 'react'
import classes from './button.module.scss'
import ButtonLoader from './ButtonLoader'

type Props = {
  className?: string
  onClick?: () => void | Promise<void>
  children?: ReactNode
  isLoading?: boolean
  disabled?: boolean
}

export default function Button(props: Props) {
  const classNames = `${classes.btn} ${props.className || ''}`

  return (
    <button
      className={classNames}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.isLoading ? <ButtonLoader /> : <span>{props.children}</span>}
    </button>
  )
}

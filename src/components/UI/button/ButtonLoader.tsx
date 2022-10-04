import React from 'react'
import classes from './button.module.scss'

export default function ButtonLoader() {
  return (
    <div className={classes.btn__loading}>
      <div></div>
    </div>
  )
}

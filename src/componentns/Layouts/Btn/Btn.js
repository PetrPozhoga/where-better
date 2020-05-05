import React from 'react'
import styles from './Btn.module.scss'

export default ({ title, styleBtn, className, onClick }) => {
  const attribute = {
    className: styles[ styleBtn ] + (className ? ' ' + className : '')
  }

  if (onClick) attribute.onClick = onClick

  return (
    <div {...attribute}>
      { title }
    </div>
  )
}

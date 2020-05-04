import React from 'react'
import styles from './Btn.module.scss'

export default ({ title, styleBtn, className }) => {
  return (
    <div className={ styles[ styleBtn ] + (className ? ' ' + className : '') }>
      { title }
    </div>
  )
}

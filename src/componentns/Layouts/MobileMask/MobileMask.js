import React, { useState, useEffect } from 'react'
import InputMask from 'react-input-mask'
import { validNumber } from "../../../utils/inputField"
import styles from './MobileMask.module.scss'

const MobileMask = ({ value, onChange }) => {
  const [ number, setNumber ] = useState(JSON.stringify(value))

  useEffect(() => {
    setNumber(value)
  }, [ value ])

  const changeHandle = (event) => {
    setNumber(event.target.value)
    if (onChange) onChange(event.target.value)
  }

  return (
    <label className={ styles.root }>
      <InputMask mask="+7 (999) 999-99-99" value={ number } onChange={ changeHandle }/>
      <span style={ { top: !!number.length ? '16px' : '50%' } }>Телефон</span>
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
           style={ { opacity: validNumber(number) ? 1 : 0 } }>
        <path d="M4.8048 11.327L9.01107 21.8513C9.33644 22.6654 10.4774 22.6965 10.8466 21.9014L18.8339 4.70215"
              stroke="#1E8E4B" strokeWidth="2"/>
      </svg>
    </label>
  )
}

export default MobileMask

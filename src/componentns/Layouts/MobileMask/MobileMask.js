import React, { useState, useEffect } from 'react'
import InputMask from 'react-input-mask'
import { validNumber } from "../../../utils/inputField"
import styles from './MobileMask.module.scss'

const MobileMask = ({ value, onChange, isError }) => {
  const [ number, setNumber ] = useState(JSON.stringify(value))

  useEffect(() => {
    console.log(value)
    setNumber(value)
  }, [ value ])

  const changeHandle = (event) => {
    setNumber(event.target.value)
    if (onChange) onChange(event.target.value)
  }

  const numberIsValid = validNumber(number)

  return (
    <>
      <label className={ styles.root + (isError && !numberIsValid ? ' ' + styles.rootError : '') }>
        <InputMask mask="+7 (999) 999-99-99" value={ number } onChange={ changeHandle }/>
        <span style={ { top: !!number.length ? '16px' : '50%' } }>Телефон</span>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
             style={ { opacity: numberIsValid ? 1 : 0 } }>
          <path d="M4.8048 11.327L9.01107 21.8513C9.33644 22.6654 10.4774 22.6965 10.8466 21.9014L18.8339 4.70215"
                stroke="#1E8E4B" strokeWidth="2"/>
        </svg>
        <div className={ styles.errorHide }>
          Введите Ваш номер телефона
        </div>
      </label>
    </>
  )
}

export default MobileMask

import React, { useState, useEffect } from 'react'
import stylesMask from '../MobileMask/MobileMask.module.scss'
import styles from './InputField.module.scss'

const InputField = ({ value, placeholder, inputId }) => {
  const [ customValue, setCustomValue ] = useState('')

  useEffect(() => {
    setCustomValue(value)
  }, [])

  const changeHandler = ({ target }) => {
    setCustomValue(target.value)
  }

  return (
    <label className={ styles.root + ' ' + stylesMask.root }>
      <input id={ inputId } type="text" value={ customValue } onChange={ changeHandler }/>
      <span style={ { top: !!customValue.length ? '16px' : '50%' } }>{ placeholder }</span>
    </label>
  )
}

export default InputField

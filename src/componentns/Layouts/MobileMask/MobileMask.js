import React, { useState, useEffect } from 'react'
import InputMask from 'react-input-mask'
import styles from './MobileMask.module.scss'

const MobileMask = ({ value }) => {
  const [ number, setNumber ] = useState('')

  useEffect(() => {
    setNumber(value)
  }, [ value ])

  const onChange = (event) => {
    setNumber(event.target.value)
  }

  return (
    <label className={ styles.root }>
      <InputMask mask="+7 (999) 999-99-99" value={ number } onChange={ onChange }/>
      <span style={{ top: !!number.length ? '16px' : '50%' }}>Телефон</span>
    </label>
  )
}

export default MobileMask

import React from 'react'
import Consultation from "./Consultation/Consultation"
import Facts from './Facts/Facts'
import styles from './Advantages.module.scss'

const Advantages = () => {
  return (
    <div className={ styles.root }>
      <Consultation/>
      <Facts/>
    </div>
  )
}

export default Advantages

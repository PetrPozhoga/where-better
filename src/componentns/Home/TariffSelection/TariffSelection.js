import React from 'react'
import Applications from './Applications/Applications'
import Tariff from "./Tariff/Tariff"
import styles from './TariffSelection.module.scss'

const TariffSelection = () => {
  return (
    <div className={ styles.root }>
      <Applications/>
      <Tariff/>
    </div>
  )
}

export default TariffSelection

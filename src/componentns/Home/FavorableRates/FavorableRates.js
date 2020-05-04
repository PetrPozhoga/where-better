import React from 'react'
import Filters from "./Filters/Filters"
import Tariffs from "./Tariffs/Tariffs"
import styles from './FavorableRates.module.scss'

const FavorableRates = () => {
  return (
    <div className={ styles.root }>
      <h1>Выгодные тарифы на интернет в Москве</h1>
      <h2>Найдите провайдеров, которые подключают домашний интернет и ТВ по вашему адресу</h2>
      <Filters/>
      <Tariffs/>
    </div>
  )
}

export default FavorableRates

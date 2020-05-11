import React from 'react'
import Filters from "./Filters/Filters"
import Tariffs from "./Tariffs/Tariffs"
import styles from './FavorableRates.module.scss'

const FavorableRates = () => {
  return (
    <div className={ styles.root }>
      <h1>Тарифы на домашний интернет</h1>
      <h2>Мы собрали для вас самые актуальные тарифы на домашний интернет и телевидение, включая эксклюзивные, а также акционные предложения от провайдеров. Выберите самый выгодный тариф и подключите его со скидкой.</h2>
      <Filters/>
      <Tariffs/>
    </div>
  )
}

export default FavorableRates

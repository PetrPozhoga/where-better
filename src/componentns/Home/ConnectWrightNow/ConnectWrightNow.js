import React from 'react'
import Consultation from "../Сonsultation/Сonsultation"
import styles from './ConnectWrightNow.module.scss'

const ConnectWrightNow = () => {
  return (
    <div className={ styles.root }>
      <h1>Подключайся прямо сейчас!</h1>
      <h2>Найдите провайдеров, которые подключают домашний интернет  и ТВ по вашему адресу</h2>
      <Consultation btnStyle='red'  btnClassName={ styles.btn } className={ styles.consultation }/>
    </div>
  )
}

export default ConnectWrightNow

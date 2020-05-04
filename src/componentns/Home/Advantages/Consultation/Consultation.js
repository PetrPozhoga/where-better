import React from 'react'
import Btn from "../../../Layouts/Btn/Btn"
import styles from './Consultation.module.scss'

const Consultation = () => {
  return (
    <div className={ styles.root }>
      <div className={ styles.numberOne }>#1</div>
      <div className={ styles.title }>
        <span>Где лучше -</span><br/>
        лучший сервис выбора провайдера в России</div>
      <Btn className={ styles.btn } title={ 'Заказать консультацию' } styleBtn={ 'black' }/>
    </div>
  )
}

export default Consultation

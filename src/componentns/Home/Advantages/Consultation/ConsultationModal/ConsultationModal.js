import React from 'react'
import Btn from "../../../../Layouts/Btn/Btn"
import styles from './ConsultationModal.module.scss'

const ConsultationModal = () => {
  return (
    <div className={ styles.root }>
      <h1>Заказать консультацию</h1>
      <h2>Наш специалист перезвонит в течение 2 минут</h2>
      <input type="text"/>
      <Btn styleBtn={'red'} className={styles.btn} title={'Позвоните мне'}/>
      <span>Отправляя заявку вы соглашаетесь с Политикой обработки персональных данных</span>
    </div>
  )
}

export default ConsultationModal

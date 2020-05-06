import React from 'react'
import CallImg from './call.svg'
import Btn from '../../Btn/Btn'
import styles from './ConsultationSendModal.module.scss'

const ConsultationSendModal = ({closeModal}) => {
  return (
    <div className={ styles.root }>
      <CallImg/>
      <h1>Уже звоним вам!</h1>
      <h2>Наш специалист принял вашу заявку, ожидайте звонка</h2>
      <Btn className={ styles.btn } title={ 'Закрыть' } styleBtn={ 'blackTransparent' } onClick={ closeModal }/>
      <span>Отправляя заявку вы соглашаетесь с Политикой обработки персональных данных</span>
    </div>
  )
}

export default ConsultationSendModal

import React from 'react'
import MobileImg from './mobile.svg'
import Btn from "../../../Layouts/Btn/Btn"
import styles from './GetSmsLinkModal.module.scss'

const GetSmsLinkModal = ({ closeModal }) => {
  return (
    <div className={ styles.root }>
      <MobileImg/>
      <h1>Сообщение отправлено</h1>
      <h2>Мы отправили вам ссылку на установку мобильного приложения</h2>
      <Btn className={ styles.btn } onClick={ closeModal } styleBtn={ 'black' } title={ 'Закрыть' }/>
    </div>
  )
}

export default GetSmsLinkModal

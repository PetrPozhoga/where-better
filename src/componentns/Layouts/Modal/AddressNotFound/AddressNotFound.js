import React, { useState } from 'react'
import styles from './AddressNotFound.module.scss'
import MobileMask from "../../MobileMask/MobileMask"
import Btn from "../../Btn/Btn"

const AddressNotFound = ({ strNotFount, changeConsultationSendModal, consultationNumberError }) => {
  const [ number, setNumber ] = useState('')
  return (
    <div className={ styles.root }>
      <div className={ styles.alert }>
        К сожалению, { strNotFount }. Укажите ваш телефон и наш специалист свяжется с вами
      </div>
      <MobileMask value={ number } onChange={ (value) => setNumber(value) } isError={ consultationNumberError }/>
      <Btn styleBtn={ 'red' } className={ styles.btn } title={ 'Позвоните мне' }
           onClick={ changeConsultationSendModal }/>
      <span>Отправляя заявку вы соглашаетесь с Политикой обработки персональных данных</span>
    </div>
  )
}

export default AddressNotFound

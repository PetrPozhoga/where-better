import React, { useEffect, useState } from 'react'
import Btn from "../../../Layouts/Btn/Btn"
import styles from './ConsultationModal.module.scss'
import MobileMask from '../../../Layouts/MobileMask/MobileMask'
import { connect } from 'react-redux'
import { changeConsultationSendModal } from '../../../../store/modal/actions'

const ConsultationModal = ({ changeConsultationSendModal, consultationNumberError, consultationNumberClear }) => {
  const [ number, setNumber ] = useState('')

  useEffect(() => {
    if (consultationNumberClear) setNumber('')
  }, [consultationNumberClear])

  return (
    <div className={ styles.root }>
      <h1>Заказать консультацию</h1>
      <h2>Наш специалист перезвонит в течение 2 минут</h2>
      <MobileMask value={ number } onChange={ (value) => setNumber(value) } isError={ consultationNumberError }/>
      <Btn styleBtn={ 'red' } className={ styles.btn } title={ 'Позвоните мне' }
           onClick={ changeConsultationSendModal.bind(null, number) }/>
      <span>Отправляя заявку вы соглашаетесь с Политикой обработки персональных данных</span>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    consultationNumberError: state.modal.consultationNumberError,
    consultationNumberClear: state.modal.consultationNumberClear
  }
}

const mapDispatchToProps = dispatch => ({
  changeConsultationSendModal: number => dispatch(changeConsultationSendModal(number))
})

export default connect(mapStateToProps, mapDispatchToProps)(ConsultationModal)

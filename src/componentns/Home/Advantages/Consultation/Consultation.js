import React, { memo } from 'react'
import Btn from "../../../Layouts/Btn/Btn"
import Modal from '../../../Layouts/Modal/Modal'
import ConsultationModal from './ConsultationModal/ConsultationModal'
import { connect } from 'react-redux'
import { toggleModal } from '../../../../store/modal/actions'
import { CHANGE_ADVANTAGES_CONSULTATION_MODAL } from "../../../../store/home/advantages/actions"
import styles from './Consultation.module.scss'

const Consultation = memo(({ consultationModal, toggleModal }) => {
  return (
    <>
      <div className={ styles.root }>
        <div className={ styles.numberOne }>#1</div>
        <div className={ styles.title }>
          <span>Где лучше -</span><br/>
          лучший сервис выбора провайдера в России
        </div>
        <Btn className={ styles.btn }
             onClick={ toggleModal.bind(null, CHANGE_ADVANTAGES_CONSULTATION_MODAL, true) }
             title={ 'Заказать консультацию' }
             styleBtn={ 'black' }/>
      </div>
      <Modal classModal={ 'advantagesConsultation' } isOpen={ consultationModal } type={ CHANGE_ADVANTAGES_CONSULTATION_MODAL }>
        <ConsultationModal/>
      </Modal>
    </>
  )
})

const mapStateToProps = state => {
  return {
    consultationModal: state.home.advantages.consultationModal
  }
}

const mapDispatchToProps = dispatch => ({
  toggleModal: (type, isOpen) => dispatch(toggleModal(type, isOpen))
})

export default connect(mapStateToProps, mapDispatchToProps)(Consultation)

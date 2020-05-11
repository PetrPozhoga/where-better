import React from 'react'
import Btn from "../../Layouts/Btn/Btn"
import InputField from "../../Layouts/InputField/InputField"
import Modal from '../../Layouts/Modal/Modal'
import ChooseCityAndStreetModal from '../../Layouts/Modal/ChooseCityAndStreetModal/ChooseCityAndStreetModal'
import { CHANGE_CHOOSE_CITY_AND_STREET_MODAL, toggleModal } from "../../../store/modal/actions"
import { connect } from 'react-redux'
import styles from './EnableInternet.module.scss'

const EnableInternet = ({ chooseCityAndStreetModal, toggleModal }) => {
  return (
    <>
      <div className={ styles.root }>
        <h1>Подключите домашний интернет</h1>
        <h2>Найдите провайдеров, которые подключают домашний интернет по вашему адресу:</h2>
        <div className={ styles.searchContainer }>
          <InputField value={ '' } onClick={ toggleModal.bind(null, CHANGE_CHOOSE_CITY_AND_STREET_MODAL, true) }
                      inputId={ 'EnableInternetSearchProvider' } placeholder={ 'Введите адрес' }/>
          <Btn title={ 'Найти провайдера' } styleBtn='redLarge' className={ styles.btn }/>
        </div>
        <div className={ styles.provider }>
          { [ 'rostelecom', 'biline', 'mtc', 'megafon' ].map((item, key) =>
            <div className={ styles[ item ] } key={ key }/>
          ) }
        </div>
      </div>
      <Modal type={ CHANGE_CHOOSE_CITY_AND_STREET_MODAL } isOpen={ chooseCityAndStreetModal }
             classModal={ 'chooseCityAndStreetModal' }>
        <ChooseCityAndStreetModal/>
      </Modal>
    </>
  )
}

const mapStateToProps = state => {
  return {
    chooseCityAndStreetModal: state.modal.chooseCityAndStreetModal,
  }
}
const mapDispatchToProps = dispatch => ({
  toggleModal: (type, isOpen) => dispatch(toggleModal(type, isOpen))
})
export default connect(mapStateToProps, mapDispatchToProps)(EnableInternet)

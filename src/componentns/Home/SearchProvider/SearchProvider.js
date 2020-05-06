import React, { useState } from 'react'
import { connect } from "react-redux"
import { sendSmsLinkApp } from '../../../store/home/searchProvider/actions'
import Btn from "../../Layouts/Btn/Btn"
import iphoneImg from './iPhone6.jpg'
import searchMob from './searchMob.jpg'
import StoreBtn from './StoreBtn/StoreBtn'
import Modal from "../../Layouts/Modal/Modal"
import GetSmsLinkModal from './GetSmsLinkModal/GetSmsLinkModal'
import { toggleModal } from "../../../store/modal/actions"
import { CHANGE_GET_SMS_LINK_MODAL } from "../../../store/home/searchProvider/actions"

import MobileMask from "../../Layouts/MobileMask/MobileMask"
import styles from './SearchProvider.module.scss'

const SearchProvider = ({ windowInnerWidth, sendSmsLinkApp, getSmsLinkModal, toggleModal }) => {
  const [ number, setNumber ] = useState('')
  return (
    <>
      <div className={ styles.root }>
        <div className={ styles.imgContainer }>
          <img src={ windowInnerWidth <= 700 ? iphoneImg : searchMob } alt=""/>
        </div>
        <div>
          <h1 className={ styles.title }>Поиск провайдера у вас в телефоне</h1>
          <div className={ styles.description }>Легко найти врача неподалёку от вас
            Удобное приложение, всегда под рукой
            Записывайтесь к врачу в одно касание
          </div>
          <StoreBtn className={ styles.logoContainer }/>
          <div className={ styles.maskRoot }>
            <label htmlFor="">
              Получить ссылку в СМС
            </label>
            <div className={ styles.maskContainer }>
              <MobileMask value={ '' } onChange={ (value) => setNumber(value) }/>
              <Btn className={ styles.btn } styleBtn='black' title='Отправить'
                   onClick={ sendSmsLinkApp.bind(null, number) }/>
            </div>
          </div>
        </div>
      </div>
      <Modal classModal={ 'GetSmsLinkModal' } isOpen={ getSmsLinkModal } type={ CHANGE_GET_SMS_LINK_MODAL }>
        <GetSmsLinkModal closeModal={ toggleModal.bind(null, CHANGE_GET_SMS_LINK_MODAL, false) }/>
      </Modal>
    </>
  )
}

const mapStateToProps = state => {
  return {
    windowInnerWidth: state.window.size.windowInnerWidth,
    getSmsLinkModal: state.home.searchProvider.getSmsLinkModal
  }
}

const mapDispatchToProps = dispatch => ({
  sendSmsLinkApp: number => dispatch(sendSmsLinkApp(number)),
  toggleModal: (type, isOpen) => dispatch(toggleModal(type, isOpen)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchProvider)

import React from 'react'
import { connect } from 'react-redux'
import { toggleModal } from "../../../store/modal/actions"
import styles from './Modal.module.scss'

const Modal = ({ children, classModal, isOpen, type, toggleModal }) => {

  const hideModal = ({ target }) => {
    let root = document.querySelector('.' + classModal)
    if (target === root) {
      toggleModal(type, false)
    }
  }

  return (
    <div className={ isOpen ? styles.root + (classModal ? ' ' + classModal : '') :
      styles.root + (classModal ? ' ' + classModal : '') + ' ' + styles.rootHide }
         onClick={ hideModal }
    >
      <div className={ styles.container }>
        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg"
             onClick={ toggleModal.bind(null, type, false) }>
          <path fillRule="evenodd" clipRule="evenodd"
                d="M10.5784 10.5784C9.74375 11.413 9.74375 12.7662 10.5784 13.6008L18.1344 21.1568L10.5784 28.7127C9.74378 29.5474 9.74379 30.9005 10.5784 31.7351C11.413 32.5697 12.7662 32.5697 13.6008 31.7351L21.1568 24.1792L28.7127 31.7351C29.5473 32.5697 30.9005 32.5697 31.7351 31.7351C32.5697 30.9005 32.5697 29.5473 31.7351 28.7127L24.1791 21.1568L31.7351 13.6008C32.5698 12.7662 32.5698 11.413 31.7351 10.5784C30.9005 9.74377 29.5474 9.74377 28.7128 10.5784L21.1568 18.1344L13.6008 10.5784C12.7661 9.74377 11.413 9.74377 10.5784 10.5784Z"
                fill="#C4C4C4"/>
        </svg>

        { children }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => ({
  toggleModal: (type, isOpen) => dispatch(toggleModal(type, isOpen))
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)

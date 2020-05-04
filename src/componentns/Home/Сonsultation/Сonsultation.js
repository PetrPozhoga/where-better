import React from 'react'
import PropTypes from 'prop-types'
import styles from './Сonsultation.module.scss'
import Btn from "../../Layouts/Btn/Btn"

const Consultation = ({ className, btnStyle, btnClassName }) => {
  return (
    <div className={ styles.root + (className ? ' ' + className : '') }>
      <div>
        <div className={ styles.title }>Подключитесь по телефону:</div>
        <div className={ styles.number }>8 (800) 700-21-23</div>
      </div>
      <div>
        <div className={ styles.title }>Закажите бесплатную консультацию</div>
        <Btn title='Позвоните мне' styleBtn={ btnStyle } className={btnClassName}/>
      </div>
    </div>
  )
}

Consultation.propTypes = {
  className: PropTypes.string,
  btnStyle: PropTypes.string,
  btnClassName: PropTypes.string,
}

export default Consultation

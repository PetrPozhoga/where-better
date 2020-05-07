import React from 'react'
import styles from './YorCityIs.module.scss'

const YorCityIs = ({ city, changeCity }) => {
  return (
    <div className={ styles.root }>
      <div>Ваш город - { city }?</div>
      <div>
        <div className={ styles.apply }>Да</div>
        <svg width="1" height="22" viewBox="0 0 1 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="2.18558e-08" x2="0.499999" y2="22" stroke="#979797"/>
        </svg>
        <div className={ styles.change } onClick={ changeCity }>Изменить</div>
      </div>
    </div>
  )
}

export default YorCityIs

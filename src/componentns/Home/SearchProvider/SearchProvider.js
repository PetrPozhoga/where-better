import React from 'react'
import Btn from "../../Layouts/Btn/Btn"
import iphoneImg from './iPhone6.jpg'
import searchMob from './searchMob.jpg'
import StoreBtn from './StoreBtn/StoreBtn'
import styles from './SearchProvider.module.scss'
import { connect } from "react-redux"

const SearchProvider = ({windowInnerWidth}) => {
  return (
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
            <input type="text" placeholder='+7( )'/>
            <Btn className={ styles.btn } styleBtn='black' title='Отправить'/>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    windowInnerWidth: state.window.size.windowInnerWidth
  }
}

export default connect(mapStateToProps)(SearchProvider)

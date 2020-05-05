import React from 'react'
import { connect } from 'react-redux'
import DropDown from "../../Layouts/DropDown/DropDown"
import Btn from "../../Layouts/Btn/Btn"
import { changeHomeFaqDropDown, showMoreQuestion } from "../../../store/home/faq/actions"
import styles from './FAQ.module.scss'

const FAQ = (props) => {
  const { faqList, windowInnerWidth, faqListMobile, showMoreQuestion } = props
  return (
    <div className={ styles.root }>
      <h1>Частые вопросы</h1>
      <h2>Найдите провайдеров, которые подключают домашний интернет и ТВ по вашему адресу</h2>
      <DropDown items={ windowInnerWidth > 700 ? faqList : faqListMobile } isMoreColumn={ windowInnerWidth > 700 }
                onUpdate={ props.changeHomeFaqDropDown }/>
      { windowInnerWidth <= 700 && faqList.length !== faqListMobile.length ?
        <div className={ styles.btnContainer }>
          <Btn title={ 'Больше вопросов' } onClick={ showMoreQuestion } styleBtn={ 'blackTransparent' } className={ styles.btn }/>
        </div>
        : null }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    faqList: state.home.faq.faqList,
    faqListMobile: state.home.faq.faqListMobile,
    windowInnerWidth: state.window.size.windowInnerWidth,
  }
}

const mapDispatchToProps = dispatch => ({
  changeHomeFaqDropDown: arr => dispatch(changeHomeFaqDropDown(arr)),
  showMoreQuestion: () => dispatch(showMoreQuestion()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FAQ)

import React from 'react'
import { connect } from 'react-redux'
import DropDown from "../../Layouts/DropDown/DropDown"
import { changeHomeFaqDropDown } from "../../../store/home/faq/actions"

const FAQ = (props) => {
  const { faqList, windowInnerWidth } = props
  return (
    <div>
      <h1>Частые вопросы</h1>
      <h2>Найдите провайдеров, которые подключают домашний интернет и ТВ по вашему адресу</h2>
      <DropDown items={ faqList } isMoreColumn={ windowInnerWidth > 700 } onUpdate={ props.changeHomeFaqDropDown }/>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    faqList: state.home.faq.faqList,
    windowInnerWidth: state.window.size.windowInnerWidth
  }
}

const mapDispatchToProps = dispatch => ({
  changeHomeFaqDropDown: arr => dispatch(changeHomeFaqDropDown(arr))
})

export default connect(mapStateToProps, mapDispatchToProps)(FAQ)

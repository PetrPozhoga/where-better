import React from 'react'
import { createReducer } from "../../../utils/store"
import { CHANGE_HOME_FAQ_DROPDOWN, CHANGE_FAQ_LIST_MOBILE } from "./actions"

const faqList = [
  {
    title: 'О проекте «Где лучше»',
    description: 'aboutProject',
    isActive: true
  },
  {
    title: 'Как узнать какие провайдер подключает интернет в моем доме?',
    description: 'howToFindOutThatTheProviderHasConnectedTheInternetInMyHouse'
  },
  {
    title: 'Как правильно выбрать провайдера?',
    description: 'howToChooseTheRightProvider'
  },
  {
    title: 'Как выбрать оптимальную скорость для домашнего интернета?',
    description: 'howToChooseTheBestSpeedForHomeInternet'
  },
  {
    title: 'Как найти самый выгодный тариф интернет-провайдера?',
    description: 'HowToFindTheBestRateForYourISP'
  },
  {
    title: 'Как оставить заявку на подключение?',
    description: 'howToLeaveARequestForConnection'
  },
  {
    title: 'Что делать, если по моему адресу нет интернет-провайдера?',
    description: 'whatShouldIDoIfThereIsNoInternetProviderAtMyAddress'
  },
  {
    title: 'Как написать отзыв о провайдере?',
    description: 'howToWriteAReviewAboutTheProvider'
  },
  {
    title: 'Остались вопросы?',
    description: 'stillHaveQuestions'
  },
]

const defaultValue = {
  faqList,
  faqListMobile: faqList.slice(0, 4),
  showMobileItems: 4
}

export default createReducer(defaultValue, {
  [ CHANGE_HOME_FAQ_DROPDOWN ]: (state, { arr }) => ({ ...state, faqList: arr }),
  [ CHANGE_FAQ_LIST_MOBILE ]: (state, { faqListMobile }) => ({ ...state, faqListMobile }),
})

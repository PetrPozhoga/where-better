import React from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Nav from "../componentns/Home/Nav/Nav"
import EnableInternet from '../componentns/Home/EnableInternet/EnableInternet'
import Consultation from "../componentns/Home/Сonsultation/Сonsultation"
import AboutService from "../componentns/Home/AboutService/AboutService"
import PlugInternet from "../componentns/Home/PlugInternet/PlugInternet"
import Banner from "../componentns/Home/Banner/Banner"
import TariffSelection from "../componentns/Home/TariffSelection/TariffSelection"
import PopularProvider from "../componentns/Home/PopularProvider/PopularProvider"
import FavorableRates from "../componentns/Home/FavorableRates/FavorableRates"
import Help from "../componentns/Home/Help/Help"
import HowConnectInternet from "../componentns/Home/HowConnectInternet/HowConnectInternet"
import Advantages from "../componentns/Home/Advantages/Advantages"
import FAQ from "../componentns/Home/FAQ/FAQ"
import SearchProvider from "../componentns/Home/SearchProvider/SearchProvider"
import Promotions from "../componentns/Home/Promotions/Promotions"
import ConnectWrightNow from "../componentns/Home/ConnectWrightNow/ConnectWrightNow"
import InternetCities from "../componentns/Home/InternetCities/InternetCities"
import Logo from "../componentns/TopSidebar/Logo/Logo"
import SocialList from "../componentns/Home/SocialList/SocialList"
import StoreBtn from "../componentns/Home/SearchProvider/StoreBtn/StoreBtn"
import Modal from '../componentns/Layouts/Modal/Modal'
import ConsultationSendModal from '../componentns/Layouts/Modal/ConsultationSendModal/ConsultationSendModal'
import ChooseYourCityModal from "../componentns/Layouts/Modal/ChooseYourCityModal/ChooseYourCityModal"
import { CHANGE__CONSULTATION_SEND_MODAL, CHANGE_CHOOSE_YOR_CITY_MODAL } from "../store/modal/actions"
import { getInternetCityList } from "../store/home/internetCities/actions"
import { toggleModal } from "../store/modal/actions"
import styles from '../componentns/Home/Home.module.scss'
import { getUserCity } from "../store/user/residence/actions"

const Index = ({ windowInnerWidth, consultationSendModal, toggleModal, locationOrigin, chooseYourCityModal }) => {

  const linkList = [
    { title: 'Каталог провайдеров', href: locationOrigin + '/provider', isNativeLink: true },
    { title: 'Рейтинг провайдеров', href: locationOrigin + '/ratings', isNativeLink: true },
    { title: 'Интернет в офис', href: 'https://telecom.gde-luchshe.ru/', isNativeLink: true },
    { title: 'Интернет на дачу', href: locationOrigin + '/internet-na-dachu/', isNativeLink: true },
    { title: 'Интерактивное ТВ', href: locationOrigin + '/interaktivnoe-tv/', isNativeLink: true },
    { title: 'Помощь', href: locationOrigin + '/help', isNativeLink: true },
  ]

  const footerLinkList = [
    { title: 'О проекте', href: '/' },
    { title: 'Партнерская программа', href: '/' },
    { title: 'Стать партнером', href: '/' },
    { title: 'Вакансии', href: '/' },
    { title: 'Контакты', href: '/' },
  ]

  return (
    <>
      <div className={ styles.home }>
        <div className={ styles.container }>
          <div className={ styles.mobileNav + ' ' + styles.topNav }>
            <Nav linkList={ linkList } color={ 'red' }/>
          </div>
          <EnableInternet/>
          <Consultation btnStyle={ 'black' } btnClassName={ styles.btnConsultation }/>
          <AboutService/>
          <PlugInternet/>
          <Banner/>
          <TariffSelection/>
          <div className={ styles.titleContainer }>
            <PopularProvider/>
            <FavorableRates/>
            <div className={ styles.container }>
              <Help/>
              <HowConnectInternet/>
              <Advantages/>
              <FAQ/>
            </div>
            <Promotions/>
            <div className={ styles.container }>
              <SearchProvider/>
            </div>
            <ConnectWrightNow/>
            <div className={ styles.mobileNav + ' ' + styles.topNav }>
              <Nav linkList={ linkList } color={ 'red' } className={ styles.navLink }/>
            </div>
            <InternetCities/>
            <div className={ styles.logoContainer }>
              <Logo isSmallLogo={ windowInnerWidth <= 700 }/>
            </div>
            <Nav linkList={ footerLinkList } color={ 'black' } className={ styles.footerNav }/>
            <div className={ styles.storeSocialContainer }>
              <SocialList/>
              <StoreBtn className={ styles.storeBtnContainer }/>
            </div>
            <div className={ styles.politic }>Политика обработки персональных данных</div>
          </div>
        </div>
      </div>
      <Modal isOpen={ consultationSendModal } classModal={ 'consultationSendModal' }
             type={ CHANGE__CONSULTATION_SEND_MODAL }>
        <ConsultationSendModal closeModal={ toggleModal.bind(null, CHANGE__CONSULTATION_SEND_MODAL, false) }/>
      </Modal>
      <Modal isOpen={ chooseYourCityModal } classModal={ 'chooseYourCityModal' }
             type={ CHANGE_CHOOSE_YOR_CITY_MODAL }>
        <ChooseYourCityModal/>
      </Modal>
    </>
  )
}

Index.getInitialProps = async (ctx) => {
  const { store } = ctx
  const isServer = !!ctx.req
  const asyncAllMethod = () => {
    return Promise.all([
      store.dispatch(getInternetCityList()),
      store.dispatch(getUserCity()),
    ])
  }
  if (isServer) await asyncAllMethod()
  else asyncAllMethod()

  console.log('is server', !!ctx.req, process.title)
  return {}
}

const mapStateToProps = state => {
  return {
    windowInnerWidth: state.window.size.windowInnerWidth,
    consultationSendModal: state.modal.consultationSendModal,
    chooseYourCityModal: state.modal.chooseYourCityModal,
    locationOrigin: state.window.location.origin
  }
}

const mapDispatchToProps = dispatch => ({
  toggleModal: (type, isOpen) => dispatch(toggleModal(type, isOpen)),
  getUserCity: bindActionCreators(getUserCity, dispatch),
  getInternetCityList: bindActionCreators(getInternetCityList, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)

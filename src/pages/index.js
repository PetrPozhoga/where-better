import React from 'react'
import { connect } from "react-redux"
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
import styles from '../componentns/Home/Home.module.scss'

const Index = ({ windowInnerWidth }) => {
  const linkList = [
    { title: 'Каталог провайдеров', href: '/' },
    { title: 'Рейтинг провайдеров', href: '/' },
    { title: 'Акции', href: '/' },
    { title: 'Тарифы', href: '/' },
    { title: 'Сравнить тарифы', href: '/' },
  ]

  const footerLinkList = [
    { title: 'О проекте', href: '/' },
    { title: 'Партнерская программа', href: '/' },
    { title: 'Стать партнером', href: '/' },
    { title: 'Вакансии', href: '/' },
    { title: 'Контакты', href: '/' },
  ]
  return (
    <div className={ styles.home }>
      <div className={ styles.container }>
        <div className={ styles.mobileNav }>
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
          <div className={ styles.mobileNav }>
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
  )
}

const mapStateToProps = state => {
  return {
    windowInnerWidth: state.window.size.windowInnerWidth
  }
}

export default connect(mapStateToProps)(Index)

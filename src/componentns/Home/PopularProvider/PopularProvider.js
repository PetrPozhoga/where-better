import React, { memo } from 'react'
import SlideShow from "../../Layouts/SlideShow/SlideShow"
import Btn from "../../Layouts/Btn/Btn"
import { connect } from 'react-redux'
import styles from './PopularProvider.module.scss'

const PopularProvider = memo(({ windowInnerWidth }) => {
  const providerList = [
    {
      logo: <svg width="157" height="37" viewBox="0 0 157 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="157" height="37" rx="18.5" fill="#C4C4C4"/>
      </svg>,
      title: 'Ростелеком',
      assessment: '4.3',
      totalTariff: '1590',
      minMaxSpeed: [ 10, 50 ],
      speedUnit: 'мбит/с',
      minMaxPrice: [ 300, 1800 ],
      priceCurrency: 'руб.',
      workInCities: '1580',
      link: '/'
    },
    {
      logo: <svg width="157" height="37" viewBox="0 0 157 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="157" height="37" rx="18.5" fill="#C4C4C4"/>
      </svg>,
      title: 'Ростелеком',
      assessment: '4.3',
      totalTariff: '1590',
      minMaxSpeed: [ 10, 50 ],
      speedUnit: 'мбит/с',
      minMaxPrice: [ 300, 1800 ],
      priceCurrency: 'руб.',
      workInCities: '1580',
      link: '/'
    },
    {
      logo: <svg width="157" height="37" viewBox="0 0 157 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="157" height="37" rx="18.5" fill="#C4C4C4"/>
      </svg>,
      title: 'Ростелеком',
      assessment: '4.3',
      totalTariff: '1590',
      minMaxSpeed: [ 10, 50 ],
      speedUnit: 'мбит/с',
      minMaxPrice: [ 300, 1800 ],
      priceCurrency: 'руб.',
      workInCities: '1580',
      link: '/'
    },
    {
      logo: <svg width="157" height="37" viewBox="0 0 157 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="157" height="37" rx="18.5" fill="#C4C4C4"/>
      </svg>,
      title: 'Ростелеком',
      assessment: '4.3',
      totalTariff: '1590',
      minMaxSpeed: [ 10, 50 ],
      speedUnit: 'мбит/с',
      minMaxPrice: [ 300, 1800 ],
      priceCurrency: 'руб.',
      workInCities: '1580',
      link: '/'
    },
    {
      logo: <svg width="157" height="37" viewBox="0 0 157 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="157" height="37" rx="18.5" fill="#C4C4C4"/>
      </svg>,
      title: 'Ростелеком',
      assessment: '4.3',
      totalTariff: '1590',
      minMaxSpeed: [ 10, 50 ],
      speedUnit: 'мбит/с',
      minMaxPrice: [ 300, 1800 ],
      priceCurrency: 'руб.',
      workInCities: '1580',
      link: '/'
    }
  ]

  console.log(styles)


  return (
    <div className={ styles.root }>
      <h1>Популярные провайдеры</h1>
      <h2>Найдите провайдеров, которые подключают домашний интернет и ТВ по вашему адресу</h2>
      <div>
        <SlideShow
          marginRight={ windowInnerWidth <= 700 ? 0 : windowInnerWidth <= 950 ? 25 : 17 }
          showElements={  windowInnerWidth <= 700 ? 1 : windowInnerWidth <= 950 ? 2 : windowInnerWidth <= 1200 ? 3 : 4 }
          paddingLeft={windowInnerWidth <= 700 ? 42 : windowInnerWidth <= 950 ? 77 : windowInnerWidth <= 1267 ? 60 : 90 }
          paddingRight={ windowInnerWidth <= 700 ? 42 : windowInnerWidth <= 950 ? 77 : windowInnerWidth <= 1267 ? 60 : 90 }
          windowInnerWidth={ windowInnerWidth }
          animationTime={ 200 } slideHeight={ windowInnerWidth <= 700 ? 321 : 382 }
          idRoot={ 'popularProvider' }
          classNameContainer={ 'popularProviderContainer' }>
          { providerList.map(({
                                logo,
                                title,
                                assessment,
                                totalTariff,
                                minMaxSpeed,
                                speedUnit,
                                minMaxPrice,
                                priceCurrency,
                                workInCities,
                                link
                              }, key) =>
            <div key={ key } className={ styles.item }>
              { logo }
              <div className={ styles.title }>{ title }</div>
              <div className={ styles.assessment }>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                        fill="#4EBF7B"/>
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M18.1044 8.1819C17.1173 8.18188 16.4811 8.29947 15.7517 8.65648C15.4817 8.78865 15.2283 8.94783 14.993 9.13353C14.7668 8.95824 14.5236 8.80637 14.2647 8.67834C13.5212 8.31059 12.8523 8.18188 11.9007 8.18188C9.35199 8.18188 7.49988 10.2936 7.49988 13.0363C7.49988 15.1076 8.65476 17.1084 10.8059 19.0431C11.935 20.0586 13.3767 21.0636 14.4092 21.5982L14.9999 21.9041L15.5906 21.5982C16.6231 21.0636 18.0647 20.0586 19.1939 19.0431C21.345 17.1084 22.4999 15.1076 22.4999 13.0363C22.4999 10.3227 20.6303 8.19236 18.1044 8.1819ZM21.1363 13.0364C21.1363 14.6591 20.1723 16.3292 18.282 18.0293C17.2514 18.9562 15.9265 19.8825 14.9999 20.3685C14.0733 19.8825 12.7484 18.9562 11.7178 18.0293C9.8275 16.3292 8.86353 14.6591 8.86353 13.0364C8.86353 11.0099 10.1478 9.54553 11.9007 9.54553C12.6574 9.54553 13.1236 9.63525 13.6602 9.90065C13.9772 10.0574 14.2573 10.2644 14.4998 10.5231L15.0015 11.0583L15.4986 10.5189C15.7466 10.2498 16.0308 10.0381 16.3512 9.88127C16.8721 9.62632 17.3092 9.54553 18.1015 9.54553C19.8328 9.55271 21.1363 11.038 21.1363 13.0364Z"
                        fill="white"/>
                </svg>
                <div>{ assessment }</div>
              </div>
              <div className={ styles.totalTariff }>
                { totalTariff } тарифа
              </div>
              <div className={ styles.speed }>
                от { minMaxSpeed[ 0 ] } до { minMaxSpeed[ 1 ] } { speedUnit }
              </div>
              <div className={ styles.price }>
                от { minMaxPrice[ 0 ] } до { minMaxPrice[ 1 ] } { priceCurrency }
              </div>
              <div className={ styles.cities }>
                Работает в { workInCities } городах
              </div>
              <Btn styleBtn='black' title='Подробнее' className={ styles.btn }/>
            </div>
          ) }
        </SlideShow>
      </div>
    </div>
  )
})

const mapStateToProps = state => {
  return {
    windowInnerWidth: state.window.size.windowInnerWidth
  }
}

export default connect(mapStateToProps)(PopularProvider)

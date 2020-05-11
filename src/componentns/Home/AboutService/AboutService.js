import React from 'react'
import styles from './AboutService.module.scss'
import SlideShow from "../../Layouts/SlideShow/SlideShow"
import { connect } from "react-redux"

const AboutService = ({ windowInnerWidth }) => {
  const aboutServiceList = [
    {
      count: '278',
      title: 'интернет-провайдерв',
      description: 'Самый полный список интернет-провайдеров по всей России на одном сайте'
    },
    {
      count: '>3млн.',
      title: 'адресов в системе',
      description: 'Подключим домашний интернет и телевидение по любому адресу'
    },
    {
      count: '100 тыс.',
      title: 'подключают интернет\n' +
        'каждый месяц',
      description: 'Оставьте заявку и мы  бесплатно подберем для вас выгодный тариф'
    },
    {
      count: '0',
      title: 'рублей в месяц',
      description: 'Самый дешевый тарифный план для подключения интернета'
    },

  ]
  const slot = [ aboutServiceList.map(({ count, title, description }, key) =>
    <div className={ styles.item } key={ key }>
      <div className={ styles.count }>{ count }</div>
      <div className={ styles.title }>{ title }</div>
      <div className={ styles.description }>{ description }</div>
    </div>
  ) ]
  return (
    <div className={ styles.root }>
      { windowInnerWidth <= 1150 ?
        <SlideShow animationTime={ 300 }
                   showElements={ windowInnerWidth <= 700 ? 1 : 2 }
                   slideHeight={  windowInnerWidth <= 700 ? 265 : 232 }
                   marginRight={ windowInnerWidth <= 700 ? 0 : 15 }
                   windowInnerWidth={ windowInnerWidth }
                   classNameContainer={ 'aboutServiceSlider' }
                   idRoot={ 'aboutServiceSliderId' }
                   paddingRight={ windowInnerWidth <= 700 ? 32 : 77 }
                   paddingLeft={ windowInnerWidth <= 700 ? 32 :77 }
        >
          { slot[ 0 ] }
        </SlideShow> :
        <>
          { slot[ 0 ] }
        </> }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    windowInnerWidth: state.window.size.windowInnerWidth
  }
}

export default connect(mapStateToProps)(AboutService)

import React from 'react'
import styles from './AboutService.module.scss'
import SlideShow from "../../Layouts/SlideShow/SlideShow"
import { connect } from "react-redux"

const AboutService = ({ windowInnerWidth }) => {
  const aboutServiceList = [
    {
      count: '278',
      title: 'интернет-провайдерв',
      description: 'Более 200 интернет-провайдеров доступно для подключения'
    },
    {
      count: '>3млн.',
      title: 'адресов в системе',
      description: 'Более 200 интернет-провайдеров доступно для подключения'
    },
    {
      count: '100 тыс.',
      title: 'подключают интернет каждый месяц',
      description: 'Более 200 интернет-провайдеров доступно для подключения'
    },
    {
      count: '20 094',
      title: 'отзывов о провайдерах',
      description: 'Более 200 интернет-провайдеров доступно для подключения'
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
                   slideHeight={  windowInnerWidth <= 700 ? 203 : 232 }
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

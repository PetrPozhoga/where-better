import React from 'react'
import SlideShow from "../../Layouts/SlideShow/SlideShow"
import HowConnectImg from './howConnectImg.svg'
import styles from './HowConnectInternet.module.scss'
import { connect } from "react-redux"

const HowConnectInternet = ({ windowInnerWidth }) => {
  const instructionList = [
    {
      img: <HowConnectImg/>,
      title: 'Укажите свой адрес',
      description: 'Введите адрес и мы покажем всех провайдеров, доступных для подключения домашнего интернета по адресу'
    },
    {
      img: <HowConnectImg/>,
      title: 'Выберите тариф',
      description: 'На нашем сайте представлены все крупные провайдеры и вы точно найдете самый выгодный тариф на домашний интернет'
    },
    {
      img: <HowConnectImg/>,
      title: 'Оформите заявку',
      description: 'Оставьте заявку и с вами тут же свяжется менеджер провайдера и проконсультирует по вопросу подключения'
    }
  ]
  const slot = [
    instructionList.map((item, index) =>
      <div key={ index } className={ styles.item }>
        { item.img }
        <div className={ styles.title }>{ item.title }</div>
        <div className={ styles.description }>{ item.description }</div>
      </div>
    )
  ]
  return (
    <div className={ styles.root }>
      <h1>Как подключить интернет</h1>
      <div className={ styles.container }>
        { windowInnerWidth <= 950 ?
          <SlideShow paddingLeft={ windowInnerWidth <= 700 ? 42 : 77 }
                     paddingRight={ windowInnerWidth <= 700 ? 42 : 77 }
                     slideHeight={ windowInnerWidth <= 700 ? 328 : 382 }
                     showElements={ windowInnerWidth <= 700 ? 1 : 2 } marginRight={ windowInnerWidth <= 700 ? 1 : 25 }
                     animationTime={ 150 } windowInnerWidth={ windowInnerWidth } idRoot={ 'howConnectInternetSliderId' }
                     classNameContainer={ 'howConnectInternetSlider' }>
            { slot[ 0 ] }
          </SlideShow> :
          slot[ 0 ]
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    windowInnerWidth: state.window.size.windowInnerWidth
  }
}

export default connect(mapStateToProps)(HowConnectInternet)

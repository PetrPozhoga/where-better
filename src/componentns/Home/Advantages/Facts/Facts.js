import React from 'react'
import FactImg from './factImg.svg'
import styles from './Facts.module.scss'

const Facts = () => {
  const factList = [
    {
      img: <FactImg/>,
      title: 'Удобный поиск',
      description: 'Простой и быстрый способ узнать какие провайдеры подключают интернет по вашему адресу. '
    },
    {
      img: <FactImg/>,
      title: 'Бесплатные консультации',
      description: 'Не тратьте много времени на поиск. Мы поможем выбрать надежного провайдера и подберем для вас оптимальный тариф на самых лучших условиях.'
    },
    {
      img: <FactImg/>,
      title: 'Быстрое оформление заявки',
      description: 'Выберите тариф и оставьте заявку на подключение. В течение нескольких минут мы свяжемся с вами и назначим удобное время для подключения интернета.'
    },
  ]
  return (
    <div className={ styles.root }>
      { factList.map((item, index) =>
        <div className={ styles.item } key={ index }>
          { item.img }
          <div>
            <div className={ styles.title }>{ item.title }</div>
            <div className={ styles.description }>{ item.description }</div>
          </div>
        </div>
      ) }
    </div>
  )
}

export default Facts

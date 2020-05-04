import React from 'react'
import Select from '../../../Layouts/Select/Select'
import Radio from "../../../Layouts/Radio/Radio"
import Slider from "../../../Layouts/Slider/Slider"
import Btn from "../../../Layouts/Btn/Btn"
import styles from './Tariff.module.scss'

const Tariff = () => {
  const services = [
    { label: 'Интернет+ТВ+Мобильный', code: '1' },
    { label: 'Интернет', code: '2' },
    { label: 'ТВ+Мобильный', code: '3' },
    { label: 'Интернет+Мобильный', code: '4' },
  ]

  const connectionPlaceList = [
    { title: 'Квартира', id: 'tariff-flat' },
    { title: 'Оффис', id: 'tariff-office', checked: true },
    { title: 'Частный дом', id: 'tariff-house' },
  ]

  const sliderList = [
    { title: 'Скорость интернета', domain: [ 100, 500 ], defaultValues: [ 450, 400 ], titleValue: 'Гб' },
    { title: 'Стоимость тарифа', domain: [ 100, 1000 ], defaultValues: [ 300, 800 ], titleValue: 'Руб' },
  ]
  return (
    <div className={ styles.root }>
      <h1>Подбери свой идеальный тариф</h1>
      <label htmlFor=''>
        <span>Выберите услугу</span>
        <div className={ styles.layout }>
          <Select items={ services }/>
        </div>
      </label>
      <label htmlFor=''>
        <span>Куда нужно подключение</span>
        <div className={ styles.radioContainer }>
          { connectionPlaceList.map(({ title, id, checked }, index) =>
            <Radio name={ 'tariff-radio' } checked={ checked } key={ index } id={ id } title={ title }
                   titleColor={ '#fff' }/>
          ) }
        </div>
      </label>
      {
        sliderList.map(({ domain, defaultValues, titleValue, title }, key) =>
          <label htmlFor="" key={ key } className={ styles.layout }>
            <span>{ title }</span>
            <Slider domain={ domain } defaultValues={ defaultValues } titleValue={ titleValue }/>
          </label>
        )
      }
      <label htmlFor="" className={ styles.layout }>
        <Btn styleBtn='red' title='Подобрать тариф'/>
      </label>
    </div>
  )
}

export default Tariff

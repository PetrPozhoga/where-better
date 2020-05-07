import React from 'react'
import styles from './ChooseCityAndStreetModal.module.scss'
import InputField from "../../InputField/InputField"

export const ChooseCityAndStreetModal = () => {
  const streetList = [
    {
      street: 'ул. Сергея Лазо',
      region: 'Московская область, город Балашиха, деревня Федурново'
    },
    {
      street: 'ул. Сергея Лазо',
      region: 'Московская область, город Балашиха, деревня Федурново'
    },
    {
      street: 'ул. Сергея Лазо',
      region: 'Московская область, город Балашиха, деревня Федурново'
    },
    {
      street: 'ул. Сергея Лазо',
      region: 'Московская область, город Балашиха, деревня Федурново'
    },
    {
      street: 'ул. Сергея Лазо',
      region: 'Московская область, город Балашиха, деревня Федурново'
    },
    {
      street: 'ул. Сергея Лазо',
      region: 'Московская область, город Балашиха, деревня Федурново'
    },
    {
      street: 'ул. Сергея Лазо',
      region: 'Московская область, город Балашиха, деревня Федурново'
    },
    {
      street: 'ул. Сергея Лазо',
      region: 'Московская область, город Балашиха, деревня Федурново'
    },
    {
      street: 'ул. Сергея Лазо',
      region: 'Московская область, город Балашиха, деревня Федурново'
    },
    {
      street: 'ул. Сергея Лазо',
      region: 'Московская область, город Балашиха, деревня Федурново'
    },
    {
      street: 'ул. Сергея Лазо',
      region: 'Московская область, город Балашиха, деревня Федурново'
    },
  ]
  return (
    <div className={ styles.root }>
      <h1>Выберите город и улицу</h1>
      <InputField placeholder={ 'Введите вашу улицу' } value={ '' } className={ styles.inputField }/>
      <div className={styles.rect}/>
      <div className={ styles.container }>
        { streetList.map((item, index) =>
          <div className={ styles.item } key={ index }>
            <div className={ styles.street }>{item.street}</div>
            <div className={ styles.region }>{item.region}</div>
          </div>
        ) }
      </div>
    </div>
  )
}

export default ChooseCityAndStreetModal

import React from 'react'
import styles from './Applications.module.scss'

const Applications = () => {
  const applicationList = [
    { title: 'Ростелеком: Тариф “Супер ТВ”', description: 'Санкт-Петербург' },
    { title: 'Ростелеком: Тариф “Супер ТВ”', description: 'Санкт-Петербург' },
    { title: 'Ростелеком: Тариф “Супер ТВ”', description: 'Санкт-Петербург' },
    { title: 'Ростелеком: Тариф “Супер ТВ”', description: 'Санкт-Петербург' },
    { title: 'Ростелеком: Тариф “Супер ТВ”', description: 'Санкт-Петербург' },
    { title: 'Ростелеком: Тариф “Супер ТВ”', description: 'Санкт-Петербург' },
    { title: 'Ростелеком: Тариф “Супер ТВ”', description: 'Санкт-Петербург' },
  ]
  return (
    <div className={ styles.root }>
      <h1>Недавние заявки
        на подключение</h1>
      { applicationList.map(({ title, description }, index) =>
        <div key={ index } className={ styles.item }>
          <div className={ styles.title }>{ title }</div>
          <div className={ styles.description }>{ description }</div>
        </div>
      ) }
    </div>
  )
}

export default Applications

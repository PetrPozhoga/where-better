import React, { useState, useEffect } from 'react'
import styles from './Select.module.scss'

const Select = ({ items, changeSelect = function () {}, name, itemKey = 'label', selected }) => {

  const [ showItems, setShowItems ] = useState(false)
  const [ selectedItem, setSelectedItem ] = useState({})
  let target

  useEffect(() => {
    console.log(selected || items[ 0 ])
    setSelectedItem(JSON.parse(JSON.stringify(selected || items[ 0 ])))
  }, [ selected, items ])

  const dropDown = (event) => {
    target = event.target
    setShowItems(!showItems)
    document.getElementById('App').addEventListener('click', hideDropDown)
  }

  const hideDropDown = (event) => {
    if (event.target !== target) {
      setShowItems(false)
      document.getElementById('App').removeEventListener('click', hideDropDown)
    }
  }

  const selectItem = (item) => {
    setSelectedItem(item)
    setShowItems(false)

    try {
      changeSelect(item, name)
    } catch (err) {
      return console.log(err)
    }
  }

  return (
    <div className={ styles.root + ' ' + (showItems ? styles.rootActive : '') } style={ {} }>
      <div className={ styles.box }>
        <div className={ styles.container }>
          <div className={ styles.selectedItem } onClick={ dropDown }>
            { selectedItem[ itemKey ] }
          </div>
          <div className={ styles.arrow } onClick={ dropDown }>
            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg"
                 className={ !showItems ? '' : styles.iconTop }>
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M1.34542 -1.40961e-07L-0.000121994 1.39309L6.38129 8L12.7627 1.39309L11.4172 -1.66124e-08L6.38129 5.21383L1.34542 -1.40961e-07Z"
                    fill="#9B9B9B"/>
            </svg>
            <span className={ `${ !showItems ? 'icon-shape' : 'icon-shape icon-shape-top' }` }/>
          </div>
        </div>

        <div
          className={ styles.items }
          style={ { display: showItems ? 'block' : 'none' } }>
          {
            items.map((item, index) =>
              selectedItem.code === item.code ? null :
                <div key={ index }
                     onClick={ () => selectItem(item) }
                     className={ selectedItem[ itemKey ] === item[ itemKey ] ? styles.selected : '' }>
                  { item[ itemKey ] }
                </div>)
          }
        </div>

      </div>
    </div>
  )
}

export default Select

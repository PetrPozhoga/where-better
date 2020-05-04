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
    <div className={ styles.root + ' ' + (showItems ? styles.rootActive : '') } style={{}}>
      <div className={ styles.box }>
        <div className={ styles.container }>
          <div className={ styles.selectedItem } onClick={ dropDown }>
            { selectedItem[ itemKey ] }
          </div>
          <div className={ styles.arrow } onClick={ dropDown }>
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"
                 className={ !showItems ? '' : styles.iconTop }>
              <path d="M1.38037 1.53516L4.08887 5.07069L6.79736 1.53516" stroke="black" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <span className={ `${ !showItems ? 'icon-shape' : 'icon-shape icon-shape-top' }` }/>
          </div>
        </div>

        <div
          className={ styles.items }
          style={ { display: showItems ? 'block' : 'none' } }>
          {
            items.map((item, index) =>
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

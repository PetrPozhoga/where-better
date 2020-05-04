import React, { useEffect, useState, memo } from 'react'
import PropTypes from 'prop-types'
import Slot from "./Slot/Slot"
import styles from './DropDown.module.scss'

const DropDown = memo(({ items, isMoreColumn, onUpdate }) => {
  const [ dropDownItems, setDropDownItems ] = useState([])

  useEffect(() => {
    setDropDownItems(items.slice())
  }, [ items ])

  const handleClick = async ({ target }) => {
    console.log(target)
    const id = await getCustomId(target)
    if (id) {
      let copyItems = dropDownItems.slice()
      copyItems[ id ].isActive = !copyItems[ id ].isActive
      onUpdate(copyItems)
    }
  }

  const getCustomId = (target) => {
    try {
      if (!target) return
      if (target.hasAttribute('custom-id')) {
        return target.getAttribute('custom-id')
      }
      else {
        if (!target.parentNode) return
        else return getCustomId(target.parentNode)
      }
    }catch(err) {
      console.log(err)
    }
  }

  return (
    <div className={ styles.root } onClick={ handleClick }>
      <div className={ styles.itemContainer } style={ { marginRight: isMoreColumn ? '28px' : '' } }>
        { items.slice(0, (isMoreColumn ? Math.ceil(items.length / 2) : items.length)).map((item, index) =>
          <div key={ index } className={ styles.item }>
            <Slot item={ item } index={ index }/>
          </div>
        ) }
      </div>
      { isMoreColumn ?
        <div className={ styles.itemContainer }>
          { items.slice(Math.ceil(items.length / 2), items.length).map((item, index) => {
            index += Math.ceil(items.length / 2)
            return (
              <div key={ index } className={ styles.item }>
                <Slot item={ item } index={ index }/>
              </div>
            )
          }) }
        </div> : null }
    </div>
  )
})

DropDown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}

export default DropDown

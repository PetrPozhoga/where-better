import React, { useEffect } from 'react'
import styles from './Slot.module.scss'
import PropTypes from 'prop-types'

const Slot = ({ item, index }) => {
  const ref = React.createRef()

  useEffect(() => {
    setHeight(ref)
  }, [ ref ])

  const setHeight = ({ current }) => {
    if (!current) return
    else {
      const rootPadding = sum(getStyle(current, [ 'paddingTop', 'paddingBottom' ]))
      const { childNodes } = current
      if (childNodes.length) {
        const titleHeight = sum(getStyle(childNodes[ 0 ], [ 'height' ]))
        let totalHeight = item.isActive ? titleHeight + sum(getStyle(childNodes[ 1 ], [ 'height', 'marginTop' ])) : titleHeight
        totalHeight += rootPadding
        current.style.maxHeight = totalHeight + 'px'
      }
    }
  }

  const sum = arr => arr.reduce((acc, item) => acc += item, 0)

  const getStyle = (node, styleList) => styleList.map(style => Number(getComputedStyle(node)[ style ].replace('px', '')))
  return (
    <div className={ styles.root + (item.isActive ? ' ' + styles.isActive : '') }
         custom-id={ index }
         ref={ ref }>
      <div className={ styles.titleContainer }>
        <div className={ styles.title }>{ item.title }</div>
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M-1.0334e-06 11.8207L1.39309 13.2138L8 6.60691L1.39309 -5.77595e-07L-1.21788e-07 1.39309L5.21382 6.60691L-1.0334e-06 11.8207Z"
                fill="black"/>
        </svg>

      </div>
      <div className={ styles.description }>{ item.description }</div>
    </div>
  )
}

Slot.propTypes = {
  item: PropTypes.object,
}

export default Slot

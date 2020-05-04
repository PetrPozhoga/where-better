import React from 'react'
import PropTypes from 'prop-types'
import AndroidSvg from "../android.svg"
import IosSvg from "../ios.svg"
import styles from './StoreBtn.module.scss'

const StoreBtn =  ({className}) => {
  return (
    <div className={ styles.root + (className ? ' ' + className : '') }>
      <AndroidSvg/>
      <IosSvg/>
    </div>
  )
}

StoreBtn.propTypes = {
  className: PropTypes.string
}

export default StoreBtn

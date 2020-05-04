import React from 'react'
import styles from './Radio.module.scss'

const Radio = ({ id, name, title, onChange, titleColor, checked }) => {
  return (
    <div className={ styles.root }>
      <label htmlFor={ id }>
        <input type="radio" id={ id } name={ name } onChange={ onChange } defaultChecked={ checked }/>
        <span>
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
<circle cx="6.5" cy="6.5" r="6.5" fill="#F3683C"/>
</svg>
      </span>
      </label>
      <label htmlFor={ id } style={ { color: titleColor } }>{ title }</label>
    </div>
  )
}

export default Radio

import React from 'react'
import Link from 'next/link'
import styles from './BtnLink.module.scss'

export default ({ isNativeLink, href, title, color, className }) => {
  return (
    !isNativeLink ?
      <Link href={ href }>
        <a className={ styles[ color ] + (className ? " " + className : '') }>
          { title }
        </a>
      </Link> :
      <a href={ href } className={ styles[ color ] }>{ title }</a>
  )
}

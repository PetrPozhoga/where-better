import React from 'react'
import BtnLink from "../../Layouts/BtnLink/BtnLink"
import PropTypes from 'prop-types'
import styles from './Nav.module.scss'

const Nav = ({ linkList, color, className }) => {
  return (
    <div className={ styles.nav + (className ? ' ' + className : '')}>
      { linkList.map(({ title, href, isNativeLink }, key) =>
        <BtnLink title={ title } href={ href } isNativeLink={ isNativeLink } key={ key } color={ color }/>
      ) }
    </div>
  )
}

Nav.propTypes = {
  linkList: PropTypes.arrayOf(PropTypes.object),
  color: PropTypes.string,
  className: PropTypes.string,
}

export default Nav

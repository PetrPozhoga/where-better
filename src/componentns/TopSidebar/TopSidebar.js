import React from 'react'
import { connect } from 'react-redux'
import Btn from "../Layouts/Btn/Btn"
import Logo from "./Logo/Logo"
import { toggleModal } from '../../store/modal/actions'
import { CHANGE_CHOOSE_YOR_CITY_MODAL } from "../../store/modal/actions"
import YorCityIs from "./YorCityIs/YorCityIs"
import styles from './TopSidebar.module.scss'


const TopSidebar = (props) => {
  const { toggleModal, city } = props
  const chooseRegion = toggleModal.bind(null, CHANGE_CHOOSE_YOR_CITY_MODAL, true)

  return (
    <>
      <div className={ styles.topSidebar }>
        <button
          className={ props.mobileMenuStatus ? 'hamburger hamburger--slider is-active' : 'hamburger hamburger--slider' }
          type="button"
          //onClick={ toggleMobileMenu }
        >
          <span className="hamburger-box"><span className="hamburger-inner"/></span>
        </button>
        <Logo isSmallLogo={ props.windowInnerWidth <= 700 }/>
        <div className={ styles.pickRegion }>
          <div onClick={ chooseRegion }>Выберите регион</div>
          <svg width="25" height="32" viewBox="0 0 25 32" fill="none" onClick={ chooseRegion }>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M12.5 31.0105L13.4135 30.2129C21.0954 23.5052 25 17.6483 25 12.5C25 5.20926 19.3096 0 12.5 0C5.69035 0 0 5.20926 0 12.5C0 17.6483 3.90459 23.5052 11.5865 30.2129L12.5 31.0105ZM12.5 27.3102C5.98139 21.4354 2.77776 16.4572 2.77776 12.4999C2.77776 6.80074 7.17237 2.77768 12.5 2.77768C17.8276 2.77768 22.2222 6.80074 22.2222 12.4999C22.2222 16.4572 19.0186 21.4354 12.5 27.3102ZM12.5 5.55555C16.3353 5.55555 19.4445 8.66468 19.4445 12.5C19.4445 16.3353 16.3353 19.4444 12.5 19.4444C8.66471 19.4444 5.55557 16.3353 5.55557 12.5C5.55557 8.66468 8.66471 5.55555 12.5 5.55555ZM8.33333 12.5C8.33333 10.1988 10.1988 8.33333 12.5 8.33333C14.8012 8.33333 16.6667 10.1988 16.6667 12.5C16.6667 14.8012 14.8012 16.6667 12.5 16.6667C10.1988 16.6667 8.33333 14.8012 8.33333 12.5Z"
                  fill="black"/>
          </svg>
        </div>
        { city.city_title ? <YorCityIs city={ city.city_title } changeCity={ chooseRegion }/> : null }
      </div>
      { props.windowInnerWidth <= 700 ?
        <div className={ styles.mobileSideBar }>
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M20 2V0H0V2H20ZM20 6V8H0V6H20ZM20 12V14H0V12H20Z"
                  fill="#E8E8E8"/>
          </svg>
          <Btn className={ styles.mobileBtn } styleBtn={ 'red' } title={ 'Заказать консультацию' }/>
          <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M8.06178 20L8.65094 19.4856C13.6053 15.1595 16.1236 11.3821 16.1236 8.06178C16.1236 3.35967 12.4536 0 8.06178 0C3.66995 0 0 3.35967 0 8.06178C0 11.3821 2.51824 15.1595 7.47262 19.4856L8.06178 20ZM8.06178 17.6136C3.85766 13.8247 1.79151 10.614 1.79151 8.06179C1.79151 4.38616 4.62577 1.79152 8.06178 1.79152C11.4978 1.79152 14.3321 4.38616 14.3321 8.06179C14.3321 10.614 12.2659 13.8247 8.06178 17.6136ZM8.06178 3.58304C10.5353 3.58304 12.5405 5.58825 12.5405 8.06181C12.5405 10.5354 10.5353 12.5406 8.06178 12.5406C5.58823 12.5406 3.58301 10.5354 3.58301 8.06181C3.58301 5.58825 5.58823 3.58304 8.06178 3.58304ZM5.37452 8.06178C5.37452 6.57765 6.57765 5.37452 8.06178 5.37452C9.54591 5.37452 10.749 6.57765 10.749 8.06178C10.749 9.54591 9.54591 10.749 8.06178 10.749C6.57765 10.749 5.37452 9.54591 5.37452 8.06178Z"
                  fill="white"/>
          </svg>

        </div> :
        null }
    </>
  )
}

const mapStateToProps = state => {
  return {
    windowInnerWidth: state.window.size.windowInnerWidth,
    city: state.user.residence.city
  }
}

const mapDispatchToProps = dispatch => ({
  toggleModal: (type, isOpen) => dispatch(toggleModal(type, isOpen))
})

export default connect(mapStateToProps, mapDispatchToProps)(TopSidebar)



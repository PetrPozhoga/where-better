import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeWindowSize } from "../store/window/actions"

const Root = ({ children, changeWindowSize, size }) => {

  useEffect(() => {
    changeWindowSize()
    window.addEventListener('resize', () => {
      console.log(window.innerWidth)
      if (size.windowInnerWidth !== window.innerWidth) {
        changeWindowSize()
      }
    })
  }, [])

  return (
    <div id='App'>
      { size.windowInnerWidth ? children : null }
    </div>
  )
}


const mapStateToProps = state => {
  return {
    size: state.window.size
  }
}

const mapDispatchToProps = dispatch => ({
  changeWindowSize: () => dispatch(changeWindowSize())
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)

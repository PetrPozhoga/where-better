import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { changeWindowSize, changeLocationOrigin } from "../store/window/actions"

const Root = ({ children, changeWindowSize, size, changeLocationOrigin }) => {

  useEffect(() => {
    changeWindowSize()
    changeLocationOrigin()

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
  changeWindowSize: () => dispatch(changeWindowSize()),
  changeLocationOrigin: () => dispatch(changeLocationOrigin()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)

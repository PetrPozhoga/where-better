import React from 'react'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserCity } from "../store/user/residence/actions"
import App from 'next/app'
import Head from 'next/head'
import Root from "../componentns/Root"
import withReduxStore from '../utils/with-redux-store'
import TopSidebar from "../componentns/TopSidebar/TopSidebar"
import '../assets/fonts/lato/lato.scss'
import '../assets/fonts/montserrat/stylesheet.scss'
import '../styles/hamburger.scss'
// import 'typeface-montserrat'
import '../styles/app.scss'

//

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={ store }>
        <Root>
          <>
            <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
            </Head>
            <TopSidebar/>
            <Component { ...pageProps }/>
          </>
        </Root>
      </Provider>
    )
  }
}


const mapStateToProps = state => {
  return {
    size: state.window.size
  }
}

const mapDispatchToProps = dispatch => ({
  getUserCity: bindActionCreators(getUserCity, dispatch)
})

export default withReduxStore(connect(mapStateToProps, mapDispatchToProps)(MyApp))

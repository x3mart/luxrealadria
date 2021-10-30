import React, { Component, Fragment } from 'react'
import Banner from './Banner'
import Listingwrapper from './Listingwrapper'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'

const Content = () => {

    const location = useLocation()
    console.log(location)

    // const Header = () => {
    //   if (location.pathname === '/login' || location.pathname === '/register') {
    //     return <Header2 />
    //   } else {
    //     return <Header1 />
    //   }
    // }


  return (
    <Fragment>
      <Banner />
      <Listingwrapper />
    </Fragment>
  )
}

const mapStateToProps = state => ({
  home_page: state.home.home,
})

export default connect(mapStateToProps)(Content)

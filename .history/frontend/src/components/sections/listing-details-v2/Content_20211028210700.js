import React, { useEffect, Fragment } from 'react'
import Banner from './Banner'
import Listingwrapper from './Listingwrapper'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { load_single_property } from '../../../redux/actions/listings'

const Content = ({ load_single_property }) => {
  const location = useLocation()
  console.log(location.pathname)

  useEffect(() => {})

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

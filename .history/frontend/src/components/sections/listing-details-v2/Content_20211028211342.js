import React, { useEffect, Fragment } from 'react'
import Banner from './Banner'
import Listingwrapper from './Listingwrapper'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { load_single_property } from '../../../redux/actions/listings'

const Content = ({ load_single_property, listing }) => {
  const location = useLocation()
  console.log(location.pathname)

  const

  useEffect(() => {
      const id = location.pathname.split('/')[location.pathname.split('/').length - 1]
      load_single_property(id)
  }, [])

  useEffect(() => {
      const id = location.pathname.split('/')[location.pathname.split('/').length - 1]
      load_single_property(id)
  }, [listing])


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
  listing: state.listings.listing 
})

export default connect(mapStateToProps, { load_single_property })(Content)

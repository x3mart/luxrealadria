import React, { useEffect, Fragment } from 'react'
import Header1 from './Header'
import Header2 from './Headertwo'
import Footer from './Footer'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import {
  get_all_filters,
} from '../../redux/actions/filters'
import {
  load_homepage,
} from '../../redux/actions/home'

const MainLayout = ({
  load_homepage,
  get_all_filters,
  children,
}) => {


  const location = useLocation()

  useEffect(() => {
    if (window.innerWidth < 1200) {
      return <Header2 />
    } else {
      return <Header1 />
    }
  })

  const Header = () => {
    if(location.pathname === '/login' || location.pathname === '/register'){
      return <Header2 />
    } else {return <Header1 />}
  }



  useEffect(() => {
    load_homepage()
    get_all_filters()
  }, [])


  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}

export default connect(null, {
  load_homepage,
  get_all_filters,
})(MainLayout)

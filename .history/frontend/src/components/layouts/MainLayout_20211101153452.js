import React, { useEffect, useState, Fragment } from 'react'
import Header1 from './Header'
import Header2 from './Headertwo'
import Footer from './Footer'
import { connect } from 'react-redux'
import {
  get_all_filters,
} from '../../redux/actions/filters'
import {
  load_homepage,
} from '../../redux/actions/home'

import useWindowDimensions from '../../helper/useWindowDimensions'

const MainLayout = ({
  load_homepage,
  get_all_filters,
  children,
}) => {

  const { width } = useWindowDimensions()

  const [header, setHeader] = useState(<Header1 />)


  useEffect(() => {
    
    if (width < 1200) {
      setHeader(<Header2 />)
    } else {
      setHeader(<Header1 />)
    }
  }, [width])

  useEffect(() => {
    load_homepage()
    get_all_filters()
  }, [])


  return (
    <Fragment>
      {header}
      {children}
      <Footer />
    </Fragment>
  )
}

export default connect(null, {
  load_homepage,
  get_all_filters,
})(MainLayout)

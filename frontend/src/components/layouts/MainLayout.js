import React, { useEffect, Fragment } from 'react'
import Header from './Header'
import Footer from './Footerthree'
import { connect } from 'react-redux'
import {
  get_all_regions,
  get_all_statuses,
  get_price_range,
  get_all_purposes,
  get_all_types,
  get_beds,
  get_baths,
} from '../../redux/actions/filters'

const MainLayout = ({
  get_all_regions,
  get_all_statuses,
  get_price_range,
  get_all_purposes,
  get_all_types,
  get_beds,
  get_baths,
  children
}) => {
  useEffect(() => {
    get_all_regions()
    get_all_statuses()
    get_price_range()
    get_all_purposes()
    get_all_types()
    get_beds()
    get_baths()
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
  get_all_regions,
  get_all_statuses,
  get_price_range,
  get_all_purposes,
  get_all_types,
  get_beds,
  get_baths,
})(MainLayout)

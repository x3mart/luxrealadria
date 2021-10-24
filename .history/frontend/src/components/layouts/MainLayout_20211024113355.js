import React, { useEffect, Fragment } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footerthree'
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

const Home = ({
  get_all_regions,
  get_all_statuses,
  get_price_range,
  get_all_purposes,
  get_all_types,
  get_beds,
  get_baths,
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
      <MetaTags>
        <title>LuxRealAdria | Главная</title>
        <meta name='description' content='#' />
      </MetaTags>
      <Header />
      <Content />
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
})(Home)

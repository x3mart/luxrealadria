import React, { useEffect, Fragment } from 'react'
import Header from './Headerfive'
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

const SecondaryLayout = ({
  get_all_regions,
  get_all_statuses,
  get_price_range,
  get_all_purposes,
  get_all_types,
  get_beds,
  get_baths,
  children,
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
})(SecondaryLayout)

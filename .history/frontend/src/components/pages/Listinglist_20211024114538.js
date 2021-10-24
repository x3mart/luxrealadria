import React, { useEffect, Fragment } from 'react'
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footerthree'
import Content from '../sections/listinglist/Content';
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

const Listinglist = ({
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
        <title>LuxRealAdria | Объекты недвижимости</title>
        <meta name='description' content='#' />
      </MetaTags>
      <Breadcrumb breadcrumb={{ pagename: 'Объекты недвижимости' }} />
      <Content />
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
})(Listinglist)
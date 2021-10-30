import React, { useEffect, Fragment } from 'react'
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footerthree'
import Content from '../sections/listinglist/Content';
import { connect } from 'react-redux'
import {}

const Listinglist = () => {
  
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

export default connect(null, )(Listinglist)
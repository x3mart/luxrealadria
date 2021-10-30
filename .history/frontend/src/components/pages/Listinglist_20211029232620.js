import React, { useState, useEffect, Fragment } from 'react'
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footerthree'
import Content from '../sections/listinglist/Content';
import { connect } from 'react-redux'
import { load_properties_page } from '../../redux/actions/pages';

const Listinglist = ({ load_properties_page, properties_page }) => {
  useEffect(() => {
    load_properties_page()
  }, [])
  const []useState
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

const mapStateToProps = state => ({
  properties_page: state.pages.properties_page,
})

export default connect(mapStateToProps, { load_properties_page })(Listinglist)
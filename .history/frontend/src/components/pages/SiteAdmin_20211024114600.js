import React, { Fragment, useEffect, useState } from 'react'
import MetaTags from 'react-meta-tags'
import Header from '../layouts/Header'
import Breadcrumb from '../layouts/Breadcrumb'
import Footer from '../layouts/Footerthree'
import Content from '../sections/siteAdmin/Content'

const SiteAdmin = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>LuxRealAdria | Управление сайтом</title>
        <meta name='description' content='#' />
      </MetaTags>
      <Breadcrumb breadcrumb={{ pagename: 'Управление сайтом' }} />
      <Content />
      <Footer />
    </Fragment>
  )
}

export default SiteAdmin

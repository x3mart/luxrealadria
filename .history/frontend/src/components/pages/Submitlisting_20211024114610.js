import React, { Fragment, useEffect, useState } from 'react'
import MetaTags from 'react-meta-tags'
import Header from '../layouts/Header'
import Breadcrumb from '../layouts/Breadcrumb'
import Footer from '../layouts/Footerthree'
import Content from '../sections/submit-listing/Content'

const Submitlisting = () => {
  
  return (
    <Fragment>
      <MetaTags>
        <title>LuxRealAdria | Добавить объект</title>
        <meta name='description' content='#' />
      </MetaTags>
      <Breadcrumb breadcrumb={{ pagename: 'Добавить объект' }} />
      <Content />
      <Footer />
    </Fragment>
  )
}

export default Submitlisting

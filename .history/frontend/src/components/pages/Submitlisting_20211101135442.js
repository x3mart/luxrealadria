import React, { Fragment, useEffect, useState } from 'react'
import MetaTags from 'react-meta-tags'
import Breadcrumb from '../layouts/Breadcrumb'
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
    </Fragment>
  )
}

export default Submitlisting

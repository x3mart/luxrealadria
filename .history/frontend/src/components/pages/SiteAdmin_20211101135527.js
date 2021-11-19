import React, { Fragment } from 'react'
import MetaTags from 'react-meta-tags'
import Breadcrumb from '../layouts/Breadcrumb'
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
    </Fragment>
  )
}

export default SiteAdmin

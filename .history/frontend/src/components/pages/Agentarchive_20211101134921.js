import React, { Component, Fragment } from 'react'
import MetaTags from 'react-meta-tags'
import Breadcrumb from '../layouts/Breadcrumb'
import Content from '../sections/agent-archive/Content'

class Agentarchive extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Acres - Real Estate React Template | Agent Archive</title>
          <meta name='description' content='#' />
        </MetaTags>
        <Breadcrumb breadcrumb={{ pagename: 'Список агентов' }} />
        <Content />
      </Fragment>
    )
  }
}

export default Agentarchive

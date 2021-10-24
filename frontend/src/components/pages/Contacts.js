import React, { Component, Fragment } from 'react'
import MetaTags from 'react-meta-tags'
import Header from '../layouts/Header'
import Breadcrumb from '../layouts/Breadcrumb'
import Footer from '../layouts/Footerthree'
import Content from '../sections/contacts/Content'

class Contacts extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>LuxRealAdria | Контакты</title>
          <meta name='description' content='#' />
        </MetaTags>
        <Header />
        <Breadcrumb breadcrumb={{ pagename: 'Контакты' }} />
        <Content />
        <Footer />
      </Fragment>
    )
  }
}

export default Contacts

import React, { Component, Fragment } from 'react'
import MetaTags from 'react-meta-tags'
import Header from '../layouts/Header'
import Breadcrumb from '../layouts/Breadcrumb'
import Footer from '../layouts/Footerthree'
import Content from '../sections/contacts/Content'
import { connect } from 'react-redux'

class Contacts extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>LuxRealAdria | Контакты</title>
          <meta name='description' content='#' />
        </MetaTags>
        <Breadcrumb breadcrumb={{ pagename: 'Контакты' }} />
        <Content />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  ho: state.articles.article,
})

export default connect(mapStateToProps, )(Contacts)

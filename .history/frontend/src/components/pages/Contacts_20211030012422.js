import React, { useState, useEffect, Fragment } from 'react'
import MetaTags from 'react-meta-tags'
import Header from '../layouts/Header'
import Breadcrumb from '../layouts/Breadcrumb'
import Footer from '../layouts/Footerthree'
import Content from '../sections/contacts/Content'
import { connect } from 'react-redux'

const Contacts extends Component {

  const [contact, setContact] = useState({})

  useEffect(() => {

  })

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

const mapStateToProps = state => ({
  home_page: state.home.home_page,
})

export default connect(mapStateToProps, )(Contacts)

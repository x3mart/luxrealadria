import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Breadcrumb from '../sections/blogsingle/Breadcrumb';
import Content from '../sections/blogsingle/Content';
import { connect } from 'react-redux'
import { load_single_article } from '../../redux/actions/articles'

const Blogsingle = () => {
    return (
          <Fragment>
            <MetaTags>
              <title>LuxRealAdria | Название статьи</title>
              <meta name='description' content='#' />
            </MetaTags>
            <Breadcrumb title='Название статьи' />
            <Content />
          </Fragment>
        )
}

const mapStateToProps = state => ({
  home_page: state.home.home,
  listing: state.listings.listing,
})

export default connect(mapStateToProps, { load_single_property })(Blogsingle)

export default ;
import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../sections/blogsingle/Breadcrumb';
import Footer from '../layouts/Footerthree'
import Content from '../sections/blogsingle/Content';
import { connect } from 'react-redux'
import { load_single_art } from '../../../redux/actions/listings'

class Blogsingle extends Component {
    render() {
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
}

export default Blogsingle;
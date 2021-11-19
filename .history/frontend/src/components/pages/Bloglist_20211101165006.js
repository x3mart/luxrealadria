import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Breadcrumb from '../layouts/Breadcrumb';
import Content from '../sections/bloglist/Content';
import { connect } from 'react-redux'
import { load_error_page } from '../../redux/actions/pages'

class Bloglist extends Component {
    render() {
        return (
          <Fragment>
            <MetaTags>
              <title>LuxRealAdria | Полезные статьи</title>
              <meta name='description' content='#' />
            </MetaTags>
            <Breadcrumb breadcrumb={{ pagename: 'Полезные статьи' }} />
            <Content />
          </Fragment>
        )
    }
}

export default Bloglist;
import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Breadcrumb from '../layouts/Breadcrumb';
import Content from '../sections/error/Content';
import {connect} from 'react-redux'

class Error extends Component {
    render() {
        return (
          <Fragment>
            <MetaTags>
              <title>LuxRealAdria | 404</title>
              <meta name='description' content='#' />
            </MetaTags>
            <Breadcrumb breadcrumb={{ pagename: 'Error 404' }} />
            <Content />
          </Fragment>
        )
    }
}

export default connect(null, )(Error);
import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Breadcrumb from '../layouts/Breadcrumb';
import Content from '../sections/error/Content';
import {connect} from 'react-redux'
import {load_error_page} from '../../redux/actions/pages'

const Error = ({load_error_page}) => {
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

mapStateToProps = state

export default connect(null, { load_error_page })(Error)
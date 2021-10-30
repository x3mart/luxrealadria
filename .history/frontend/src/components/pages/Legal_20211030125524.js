import React, { us, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footerthree'
import Content from '../sections/legal/Content';
import { connect } from 'react-redux'

const Legal = () => {
    return (
          <Fragment>
            <MetaTags>
              <title>LuxRealAdria | Правовая информация</title>
              <meta name='description' content='#' />
            </MetaTags>
            <Breadcrumb breadcrumb={{ pagename: 'Правовая информация' }} />
            <Content />
          </Fragment>
        )
}

const mapStateToProps = state => ({
  home_page: state.home.home,
})

export default connect(mapStateToProps)(Legal)
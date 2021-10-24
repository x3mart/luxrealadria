import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footerthree'
import Content from '../sections/legal/Content';

class Legal extends Component {
    render() {
        return (
          <Fragment>
            <MetaTags>
              <title>LuxRealAdria | Правовая информация</title>
              <meta name='description' content='#' />
            </MetaTags>
            <Breadcrumb breadcrumb={{ pagename: 'Правовая информация' }} />
            <Content />
            <Footer />
          </Fragment>
        )
    }
}

export default Legal;
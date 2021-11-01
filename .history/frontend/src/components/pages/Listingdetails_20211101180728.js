import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Content from '../sections/listing-details/Content';

class Listingdetails extends Component {
    render() {
        return (
          <Fragment>
            <MetaTags>
              <title>LuxRealAdria | Объект</title>
              <meta name='description' content='#' />
            </MetaTags>
            <Content />
          </Fragment>
        )
    }
}

export default Listingdetails;
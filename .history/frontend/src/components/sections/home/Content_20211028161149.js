import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Categories from './Categories';
import Listingslider from './Listingslider';
import Toplistings from './Toplistings';
import Faqs from './Faqs';

class Content extends Component {
    render() {
        return (
          <Fragment>
            <Banner />
            <Categories />
            <Toplistings />
            <Listingslider />
            <Faqs />
          </Fragment>
        )
    }
}

export default Content;
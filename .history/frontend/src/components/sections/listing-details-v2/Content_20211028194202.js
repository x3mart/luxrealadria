import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Listingwrapper from './Listingwrapper';
import { connect } from 'react-redux'

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Listingwrapper />
            </Fragment>
        );
    }
}

export default Content;
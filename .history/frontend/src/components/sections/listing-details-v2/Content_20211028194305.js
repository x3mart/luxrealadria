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

const mapStateToProps = state => ({
  home_page: state.home.home,
})

export default connect(mapStateToProps)(Content)

export default ;
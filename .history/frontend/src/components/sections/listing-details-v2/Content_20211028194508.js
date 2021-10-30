import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Listingwrapper from './Listingwrapper';
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'

const Content = () => {
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

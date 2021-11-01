import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Breadcrumb from '../layouts/Breadcrumb';
import Content from '../sections/bloglist/Content';
import { connect } from 'react-redux'
import { load_error_page } from '../../redux/actions/pages'

const Bloglist = () => {
    render() {
        
    }
}

const mapStateToProps = state => ({
  error_page: state.pages.error_page,
})

export default connect(mapStateToProps, { load_error_page })(Bloglist)

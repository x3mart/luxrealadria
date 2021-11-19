import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Breadcrumb from '../layouts/Breadcrumb';
import Content from '../sections/error/Content';
import {connect} from 'react-redux'
import {load_error_page} from '../../redux/actions/pages'

class Error extends Component {
    render() {
        
    }
}

export default connect(null, { load_error_page })(Error)
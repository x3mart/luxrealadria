import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import { Redirect } from 'react-router';
import Header from '../layouts/Headerfive';
import Content from '../sections/register/Content';

class Register extends Component {
    redirect = () => {
        return <Redirect to="/login"/>
    }
    render() {
        return (
          <Fragment>
            <MetaTags>
              <title>LuxRealAdria | Регистрация</title>
              <meta name='description' content='#' />
            </MetaTags>
            <Header />
            <Content action={() => this.redirect} />
          </Fragment>
        )
    }
}

export default Register;
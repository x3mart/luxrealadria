import React, { useEffect, useState, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Breadcrumb from '../layouts/Breadcrumb';
import Content from '../sections/error/Content';
import {connect} from 'react-redux'
import {load_error_page} from '../../redux/actions/pages'

const Error = ({ load_error_page, error_page }) => {
  
  const [errorPage, setErrorPage] = useState({})
  useEffect(() => {
    load_error_page()
  }, [])

  useEffect(() => {
    if (error_page) {
      setErrorPage(error_page)
    }
  }, [error_page])

  return (
    <Fragment>
      <MetaTags>
        <title>LuxRealAdria | 404</title>
        <meta name='description' content='#' />
      </MetaTags>
      {errorPage && (
        <>
          <Breadcrumb page={errorPage} />
          <Content />
        </>
      )}
    </Fragment>
  )
}

const mapStateToProps = state => ({
  error_page: state.pages.error_page,
})

export default connect(null, { load_error_page })(Error)
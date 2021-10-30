import React, { useEffect, useState, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footerthree'
import Content from '../sections/legal/Content';
import { connect } from 'react-redux'
import {load_legal_page} from '../../redux/actions/pages'

const Legal = ({load_legal_page, legal_page}) => {
  useEffect(() => {
    load_legal_page()
  }, [])
  console.log(legal_page)
    return (
      <Fragment>
        <MetaTags>
          <title>LuxRealAdria | Правовая информация</title>
          <meta name='description' content='#' />
        </MetaTags>
        {legal_page && (
          <>
            <Breadcrumb
              breadcrumb={{ pagename: 'Правовая информация' }}
              wallpaper={legal_page.wallpaper}
            />
            <Content items={}/>
          </>
        )}
      </Fragment>
    )
}

const mapStateToProps = state => ({
  legal_page: state.pages.legal_page,
})

export default connect(mapStateToProps, {load_legal_page})(Legal)
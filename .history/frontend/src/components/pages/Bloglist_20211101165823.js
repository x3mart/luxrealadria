import React, { useState, useEffect, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Breadcrumb from '../layouts/Breadcrumb';
import Content from '../sections/bloglist/Content';
import { connect } from 'react-redux'
import { load_articles_page } from '../../redux/actions/pages'

const Bloglist = () => {

  const [errorPage, setErrorPage] = useState({})
  const [wallpaper, setWallpaper] = useState('')
  const [title, setTitle] = useState('')
  useEffect(() => {
    load_error_page()
  }, [])

  useEffect(() => {
    if (error_page) {
      setErrorPage(error_page)
      setWallpaper(error_page.image)
      setTitle(error_page.title)
    }
  }, [error_page])
    return (
      <Fragment>
        <MetaTags>
          <title>LuxRealAdria | Полезные статьи</title>
          <meta name='description' content='#' />
        </MetaTags>
        <Breadcrumb breadcrumb={{ pagename: 'Полезные статьи' }} />
        <Content />
      </Fragment>
    )
}

const mapStateToProps = state => ({
  error_page: state.pages.error_page,
})

export default connect(mapStateToProps, { load_error_page })(Bloglist)
